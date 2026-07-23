import userRepository from "../repositories/userRepository.js";
import { ValidationError, NotFoundError } from "../errors/SubErrors.js";
import { toCartDTO } from "../dto/CartDTO.js";

class CartService {
  async addItem(userId, itemId, quantity) {
    if (!userId || !itemId || !quantity) {
      throw new ValidationError("Please provide all required fields.");
    }

    const userData = await userRepository.findById(userId);
    if (!userData) {
      throw new NotFoundError("User not found.");
    }

    const cartData = userData.cartData || {};

    if (cartData[itemId]) {
      cartData[itemId].quantity = quantity;
    } else {
      cartData[itemId] = { quantity };
    }

    await userRepository.updateCart(userId, cartData);
    return toCartDTO(cartData);
  }

  // Alias for backward compatibility
  async addToCart(userId, itemId, quantity) {
    return await this.addItem(userId, itemId, quantity);
  }

  async removeItem(userId, itemId) {
    if (!userId || !itemId) {
      throw new ValidationError("Please provide all required fields.");
    }

    const userData = await userRepository.findById(userId);
    if (!userData) {
      throw new NotFoundError("User not found.");
    }

    let cartData = userData.cartData || {};
    delete cartData[itemId];

    await userRepository.updateCart(userId, cartData);
    return toCartDTO(cartData);
  }

  async updateQuantity(userId, itemId, quantity) {
    if (!userId || !itemId || quantity === undefined) {
      throw new ValidationError("Please provide all required fields.");
    }

    if (quantity === 0) {
      return await this.removeItem(userId, itemId);
    }

    const userData = await userRepository.findById(userId);
    if (!userData) {
      throw new NotFoundError("User not found.");
    }

    let cartData = userData.cartData || {};
    cartData[itemId] = { quantity };

    await userRepository.updateCart(userId, cartData);
    return toCartDTO(cartData);
  }

  // Alias for backward compatibility
  async updateCart(userId, itemId, quantity) {
    return await this.updateQuantity(userId, itemId, quantity);
  }

  async getUserCart(userId) {
    if (!userId) {
      throw new ValidationError("User ID is required");
    }

    const userData = await userRepository.findById(userId);
    if (!userData) {
      throw new NotFoundError("User not found.");
    }

    return toCartDTO(userData.cartData || {});
  }
}

export default new CartService();
