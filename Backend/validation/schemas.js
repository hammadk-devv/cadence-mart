import { z } from "zod";

export const userRegisterSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().email("Please enter valid email."),
    password: z.string().min(8, "Password should be at least 8 characters long"),
  }),
});

export const userLoginSchema = z.object({
  body: z.object({
    email: z.string().trim().email("Please enter valid email."),
    password: z.string().min(1, "Password is required"),
  }),
});

export const adminRegisterSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().email("Please enter valid email."),
    password: z.string().min(8, "Password should be at least 8 characters long"),
  }),
});

export const adminLoginSchema = z.object({
  body: z.object({
    email: z.string().trim().email("Please enter valid email."),
    password: z.string().min(1, "Password is required"),
  }),
});

export const productCreateSchema = z.object({
  body: z
    .object({
      name: z.string().trim().min(1, "Product name is required"),
      description: z.string().trim().optional(),
      discription: z.string().trim().optional(),
      price: z
        .string()
        .or(z.number())
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val > 0, "Price must be a positive number"),
      category: z.string().trim().min(1, "Category is required"),
      subcategory: z.string().trim().min(1, "Subcategory is required"),
      sizes: z.string().refine((val) => {
        try {
          const parsed = JSON.parse(val);
          return Array.isArray(parsed) && parsed.length > 0;
        } catch {
          return false;
        }
      }, "Sizes must be a valid non-empty JSON array"),
      bestseller: z.any().optional(),
    })
    .refine((data) => data.description || data.discription, {
      message: "Product description is required",
      path: ["description"],
    }),
});

export const cartUpdateSchema = z.object({
  body: z.object({
    itemId: z.string().trim().min(1, "Item ID is required"),
    quantity: z.number().int().nonnegative("Quantity must be a non-negative integer"),
  }),
});
