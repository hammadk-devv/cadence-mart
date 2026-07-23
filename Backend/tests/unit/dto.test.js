import { describe, test, expect } from "vitest";
import { toUserDTO } from "../../dto/UserDTO.js";
import { toAdminDTO } from "../../dto/AdminDTO.js";
import { toProductDTO } from "../../dto/ProductDTO.js";
import { toCartDTO } from "../../dto/CartDTO.js";

describe("DTO Mapping Unit Tests", () => {
  test("toUserDTO should strip password and return normalized properties", () => {
    const rawUser = {
      _id: "user_123",
      name: "Alice",
      email: "alice@example.com",
      password: "hashed_secret_password",
      __v: 0,
    };

    const dto = toUserDTO(rawUser);

    expect(dto).toEqual({
      id: "user_123",
      name: "Alice",
      email: "alice@example.com",
    });
    expect(dto).not.toHaveProperty("password");
    expect(dto).not.toHaveProperty("__v");
  });

  test("toAdminDTO should return normalized properties", () => {
    const rawAdmin = {
      _id: "admin_123",
      name: "Manager",
      email: "manager@example.com",
      password: "hashed_secret_password",
    };

    const dto = toAdminDTO(rawAdmin);

    expect(dto).toEqual({
      id: "admin_123",
      name: "Manager",
      email: "manager@example.com",
    });
    expect(dto).not.toHaveProperty("password");
  });

  test("toProductDTO should parse standard/fallback description and legacy casing", () => {
    const rawProduct = {
      _id: "prod_123",
      name: "T-Shirt",
      discription: "Nice cotton t-shirt",
      price: 20,
      image: ["http://example.com/img.png"],
      sizes: ["S", "M"],
      category: "Clothes",
      subcategory: "Shirts",
      bestSeller: true,
      date: 1625097600000,
    };

    const dto = toProductDTO(rawProduct);

    expect(dto).toEqual({
      _id: "prod_123",
      id: "prod_123",
      name: "T-Shirt",
      description: "Nice cotton t-shirt",
      discription: "Nice cotton t-shirt", // backward compatibility check
      price: 20,
      image: ["http://example.com/img.png"],
      sizes: ["S", "M"],
      category: "Clothes",
      subcategory: "Shirts",
      bestSeller: true,
      gender: undefined,
      brand: undefined,
      rating: undefined,
      reviewCount: undefined,
      stock: undefined,
      date: 1625097600000,
    });
  });

  test("toCartDTO should normalize cart object lists", () => {
    const rawCart = {
      item_1: 2, // legacy scalar quantities format
      item_2: { quantity: 5 }, // standard objects format
    };

    const dto = toCartDTO(rawCart);

    expect(dto).toEqual({
      item_1: { quantity: 2 },
      item_2: { quantity: 5 },
    });
  });
});
