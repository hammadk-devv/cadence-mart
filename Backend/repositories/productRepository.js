import productModel from "../models/productModel.js";

class ProductRepository {
  async findMany(query = {}) {
    return await productModel.find(query);
  }

  async findAll() {
    return await this.findMany({});
  }

  async findById(id) {
    return await productModel.findById(id);
  }

  async create(productData) {
    const newProduct = new productModel(productData);
    return await newProduct.save();
  }

  async update(id, updateData) {
    return await productModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await productModel.findByIdAndDelete(id);
  }

  async deleteById(id) {
    return await this.delete(id);
  }

  async exists(query) {
    return await productModel.exists(query);
  }
}

export default new ProductRepository();
