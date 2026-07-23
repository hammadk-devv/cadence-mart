import adminRepository from "../repositories/adminRepository.js";
import hashedPassword from "../utils/hashPassword.js";
import createToken from "../utils/createToken.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { ValidationError, AuthenticationError, ConflictError } from "../errors/SubErrors.js";
import { toAdminDTO } from "../dto/AdminDTO.js";

class AdminService {
  async register(name, email, password) {
    if (!name || !email || !password) {
      throw new ValidationError("Please fill all the fields");
    }

    const exist = await adminRepository.findByEmail(email);
    if (exist) {
      throw new ConflictError("Admin already exists");
    }

    if (!validator.isEmail(email)) {
      throw new ValidationError("Please enter valid email.");
    }

    if (password.length < 8) {
      throw new ValidationError("Password should be at least 8 characters long");
    }

    const pass = await hashedPassword(password);
    const admin = await adminRepository.create({
      name,
      email,
      password: pass,
    });

    const token = createToken(admin._id);
    return {
      token,
      admin: toAdminDTO(admin),
    };
  }

  // Alias for backward compatibility
  async registerAdmin(name, email, password) {
    return await this.register(name, email, password);
  }

  async authenticate(email, password) {
    if (!email || !password) {
      throw new ValidationError("Please fill all the fields");
    }

    const exist = await adminRepository.findByEmail(email);
    if (!exist) {
      throw new AuthenticationError("Admin is not registered");
    }

    const isMatch = await bcrypt.compare(password, exist.password);
    if (!isMatch) {
      throw new AuthenticationError("Invalid credentials");
    }

    const token = createToken(exist._id);
    return {
      token,
      admin: toAdminDTO(exist),
    };
  }

  // Alias for backward compatibility
  async loginAdmin(email, password) {
    return await this.authenticate(email, password);
  }
}

export default new AdminService();
