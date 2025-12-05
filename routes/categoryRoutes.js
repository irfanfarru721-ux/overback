import express from "express";
import { getCategories, getCategoriesByVendor, createCategory, updateCategory, deleteCategory } from "../controllers/categoriesController.js";
import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/vendor/:vendorId", getCategoriesByVendor);
router.post("/", adminProtect, createCategory);
router.put("/:id", adminProtect, updateCategory);
router.delete("/:id", adminProtect, deleteCategory);

export default router;
