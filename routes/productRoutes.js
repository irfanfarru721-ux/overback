import express from "express";
import {
  getProducts,
  getProductsByCategory,
  createProduct,
} from "../controllers/productController.js";

import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/category/:categoryId", getProductsByCategory);
router.post("/", adminProtect, createProduct);

export default router;
