import productRepository from "../repositories/productRepository.js";
import { v2 as cloudinary } from "cloudinary";
import { ValidationError, NotFoundError } from "../errors/SubErrors.js";
import { toProductDTO, toProductDTOs } from "../dto/ProductDTO.js";

class ProductService {
  async publishProduct(productData, files) {
    const { name, description, discription, price, category, subcategory, sizes, bestseller } =
      productData;
    const finalDescription = description || discription;

    if (!name || !finalDescription || !price || !category || !subcategory || !sizes) {
      throw new ValidationError("Please fill all the fields.");
    }

    const image1 = files.image1 && files.image1[0];
    const image2 = files.image2 && files.image2[0];
    const image3 = files.image3 && files.image3[0];
    const image4 = files.image4 && files.image4[0];

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

    if (images.length === 0) {
      throw new ValidationError("Please upload at least one image.");
    }

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        try {
          const result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });
          return result.secure_url;
        } catch (err) {
          console.error("Cloudinary upload failed inside service:", err);
          throw err;
        }
      })
    );

    const parsedPrice = Number(price);

    const mappedProductData = {
      name,
      description: finalDescription,
      discription: finalDescription,
      category,
      price: parsedPrice,
      subcategory,
      bestSeller: bestseller === "true" || bestseller === true || bestseller === "bestseller",
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = await productRepository.create(mappedProductData);
    return toProductDTO(product);
  }

  // Alias for backward compatibility
  async addProduct(productData, files) {
    return await this.publishProduct(productData, files);
  }

  async listProducts() {
    const products = await productRepository.findMany({});
    if (!products) {
      throw new NotFoundError("No products found.");
    }
    return toProductDTOs(products);
  }

  async archiveProduct(id) {
    if (!id) {
      throw new ValidationError("Please provide product ID.");
    }
    const deletedProduct = await productRepository.delete(id);
    if (!deletedProduct) {
      throw new NotFoundError("Product not found or already removed.");
    }
    return toProductDTO(deletedProduct);
  }

  // Alias for backward compatibility
  async removeProduct(id) {
    return await this.archiveProduct(id);
  }
}

export default new ProductService();
