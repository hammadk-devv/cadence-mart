import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import hpp from "hpp";
import mongoose from "mongoose";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

// Central config and setup validation
import { securityConfig } from "./config/index.js";
import { validateEnv } from "./config/validateEnv.js";
import { requestId } from "./middleware/requestId.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

// Fail-fast environment check on startup
validateEnv();

// Initialize apps & DB
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// 1. Request tracing UUID
app.use(requestId);

// 2. Security & Optimization middlewares
app.use(helmet());
app.use(compression());
app.use(express.json());

// Custom NoSQL Injection Sanitizer middleware
app.use((req, res, next) => {
  const sanitize = (obj) => {
    if (obj && typeof obj === "object") {
      for (const key in obj) {
        if (key.startsWith("$")) {
          delete obj[key];
        } else {
          sanitize(obj[key]);
        }
      }
    }
  };
  sanitize(req.body);
  sanitize(req.query);
  sanitize(req.params);
  next();
});

app.use(hpp());
app.disable("x-powered-by");

// CORS configuration from centralized origin lists
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (
      securityConfig.allowedOrigins.includes("*") ||
      securityConfig.allowedOrigins.includes(origin)
    ) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
};
app.use(cors(corsOptions));

// 3. General API rate limiter
app.use("/api", apiLimiter);

// Api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/admin", adminRouter);

// Health audit probe
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    environment: securityConfig.nodeEnv,
    version: "1.0.0",
    timestamp: Date.now(),
    services: {
      mongodb: mongoose.connection.readyState === 1 ? "CONNECTED" : "DISCONNECTED",
    },
  });
});

app.get("/", (req, res) => {
  res.send("API Working");
});

// 4. Central error middleware catcher
app.use(errorHandler);

let server;
if (!process.env.VITEST) {
  server = app.listen(port, () => console.log(`Server started on port ${port}`));

  // Graceful process shutdown handler
  const gracefulShutdown = (signal) => {
    console.log(`Received ${signal}. Starting graceful shutdown...`);

    server.close(async () => {
      console.log("HTTP server closed.");
      try {
        await mongoose.connection.close(false);
        console.log("MongoDB connection closed.");
        process.exit(0);
      } catch (err) {
        console.error("Error during MongoDB disconnection:", err);
        process.exit(1);
      }
    });

    // Force close connection pool after 10s timeout
    setTimeout(() => {
      console.error("Forcing shutdown after timeout.");
      process.exit(1);
    }, 10000);
  };

  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
}

export default app;
