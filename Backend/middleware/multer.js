//  To add a product we are create middleware to add a product.

import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    // Sanitize the file name to prevent directory traversal
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "");
    callback(null, `${Date.now()}-${safeName}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, callback) => {
    const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (allowedMimeTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Only JPEG, JPG, PNG, and WEBP image uploads are allowed."), false);
    }
  },
});

export default upload;
