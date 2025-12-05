import express from "express";
import {
  getSubCategories,
  getSubCategoriesByCategory,
  createSubCategory,
} from "../controllers/subCategoryController.js";

import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

router.get("/", getSubCategories);
router.get("/category/:categoryId", getSubCategoriesByCategory);
router.post("/", adminProtect, createSubCategory);

export default router;
