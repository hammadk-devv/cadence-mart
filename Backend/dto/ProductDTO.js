export const toProductDTO = (product) => {
  if (!product) return null;
  return {
    _id: product._id,
    id: product._id,
    name: product.name,
    description: product.description || product.discription,
    discription: product.description || product.discription, // fallback
    price: product.price,
    image: product.image,
    category: product.category,
    subcategory: product.subcategory,
    sizes: product.sizes,
    bestSeller: product.bestSeller,
    gender: product.gender,
    brand: product.brand,
    rating: product.rating,
    reviewCount: product.reviewCount,
    stock: product.stock,
    date: product.date,
  };
};

export const toProductDTOs = (products) => {
  if (!Array.isArray(products)) return [];
  return products.map(toProductDTO);
};
