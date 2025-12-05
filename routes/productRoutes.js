import express from "express";
import { 
  getProducts,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

// User
router.get("/category/:categoryId", getProductsByCategory);

// Admin
router.get("/", adminProtect, getProducts);
router.post("/", adminProtect, createProduct);
router.put("/:id", adminProtect, updateProduct);
router.delete("/:id", adminProtect, deleteProduct);

export default router;
