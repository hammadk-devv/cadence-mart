import adminModel from "../models/adminModel.js";

class AdminRepository {
  async findById(id) {
    return await adminModel.findById(id);
  }

  async findOne(query) {
    return await adminModel.findOne(query);
  }

  async findByEmail(email) {
    return await this.findOne({ email });
  }

  async create(adminData) {
    const newAdmin = new adminModel(adminData);
    return await newAdmin.save();
  }

  async update(id, updateData) {
    return await adminModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async exists(query) {
    return await adminModel.exists(query);
  }
}

export default new AdminRepository();
