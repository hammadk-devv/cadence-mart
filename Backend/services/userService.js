import userRepository from "../repositories/userRepository.js";
import hashedPassword from "../utils/hashPassword.js";
import createToken from "../utils/createToken.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { ValidationError, AuthenticationError, ConflictError } from "../errors/SubErrors.js";
import { toUserDTO } from "../dto/UserDTO.js";

class UserService {
  async register(name, email, password) {
    if (!email || !name || !password) {
      throw new ValidationError("Please fill all the fields");
    }

    const exist = await userRepository.findByEmail(email);
    if (exist) {
      throw new ConflictError("User already exists.");
    }

    if (!validator.isEmail(email)) {
      throw new ValidationError("Please enter valid email.");
    }

    if (password.length < 8) {
      throw new ValidationError("Password should be at least 8 characters long");
    }

    const pass = await hashedPassword(password);
    const user = await userRepository.create({
      name,
      email,
      password: pass,
      cartData: {},
    });

    const token = createToken(user._id);
    return {
      token,
      user: toUserDTO(user),
    };
  }

  // Alias for backward compatibility
  async registerUser(name, email, password) {
    return await this.register(name, email, password);
  }

  async authenticate(email, password) {
    if (!email || !password) {
      throw new ValidationError("Please fill all the fields");
    }

    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new AuthenticationError("User does not exist.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new AuthenticationError("Invalid credentials.");
    }

    const token = createToken(user._id);
    return {
      token,
      user: toUserDTO(user),
    };
  }

  // Alias for backward compatibility
  async loginUser(email, password) {
    return await this.authenticate(email, password);
  }

  async getUserDetails(userId) {
    if (!userId) {
      throw new ValidationError("User ID is required");
    }

    const user = await userRepository.findById(userId);
    if (!user) {
      throw new AuthenticationError("User not found");
    }

    return toUserDTO(user);
  }
}

export default new UserService();
