import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    discription: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    sizes: {
      type: Array,
      required: true,
    },
    bestSeller: {
      type: Boolean,
    },
    gender: {
      type: String,
    },
    brand: {
      type: String,
    },
    rating: {
      type: Number,
    },
    reviewCount: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    date: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Pre-save synchronization hook for legacy discription backward compatibility
productSchema.pre("save", function (next) {
  if (this.discription && !this.description) {
    this.description = this.discription;
  } else if (this.description && !this.discription) {
    this.discription = this.description;
  }
  next();
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
