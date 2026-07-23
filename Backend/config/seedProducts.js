import productModel from "../models/productModel.js";
import { mockProducts } from "../../Frontend/src/data/mockProducts.js";

export async function seedInitialProducts() {
  try {
    const count = await productModel.countDocuments();
    // If the database doesn't have exactly 250 products, clean and seed it
    if (count !== 250) {
      console.log(`Product count in database is ${count}. Re-seeding 250 normalized products...`);

      // Clear existing products
      await productModel.deleteMany({});
      console.log("Cleared existing products from database.");

      // Map mock products to exclude the string _id so Mongoose generates ObjectIds
      const productsToInsert = mockProducts.map((p) => {
        const { _id, ...rest } = p;
        return {
          ...rest,
          date: rest.date || Date.now(),
        };
      });

      await productModel.insertMany(productsToInsert);
      console.log(
        `Successfully seeded ${productsToInsert.length} products with MongoDB ObjectIds.`
      );
    } else {
      console.log("Database already contains 250 normalized products. Skipping seeding.");
    }
  } catch (err) {
    console.error("Error auto-seeding products into MongoDB:", err.message);
  }
}
