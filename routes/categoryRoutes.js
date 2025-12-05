import express from "express";
import {
  getCategories,
  getCategoriesByVendor,
  createCategory,
} from "../controllers/categoryController.js";

import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/vendor/:vendorId", getCategoriesByVendor);
router.post("/", adminProtect, createCategory);

export default router;
