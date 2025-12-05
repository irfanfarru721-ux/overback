import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import moduleRoutes from "./routes/moduleRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import subCategoryRoutes from "./routes/subCategoryRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);               // User registration & login
app.use("/api/admin", adminRoutes);              // Admin login
app.use("/api/modules", moduleRoutes);           // Modules CRUD
app.use("/api/categories", categoryRoutes);      // Categories CRUD
app.use("/api/subcategories", subCategoryRoutes); // Subcategories CRUD
app.use("/api/vendors", vendorRoutes);           // Vendors CRUD
app.use("/api/products", productRoutes);         // Products CRUD

// Default route
app.get("/", (req, res) => {
  res.send("Merged Backend Running ✔");
});

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/merged-backend";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB Connected ✔");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => console.log(err));
