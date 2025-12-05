import express from "express";
import { 
  getProductsByCategory, 
  getAllProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from "../controllers/products.js";

const router = express.Router();

// User-facing: get products by category
router.get("/category/:categoryId", getProductsByCategory);

// Admin: all CRUD routes
router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
