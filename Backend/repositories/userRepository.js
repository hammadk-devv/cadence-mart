import userModel from "../models/userModel.js";

class UserRepository {
  async findById(id) {
    return await userModel.findById(id);
  }

  async findOne(query) {
    return await userModel.findOne(query);
  }

  async findByEmail(email) {
    return await this.findOne({ email });
  }

  async create(userData) {
    const newUser = new userModel(userData);
    return await newUser.save();
  }

  async update(id, updateData) {
    return await userModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async updateCart(userId, cartData) {
    return await this.update(userId, { cartData });
  }

  async exists(query) {
    return await userModel.exists(query);
  }
}

export default new UserRepository();
