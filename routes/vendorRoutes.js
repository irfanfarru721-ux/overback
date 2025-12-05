import express from "express";
import { getVendors, getVendorsByModule, createVendor, updateVendor, deleteVendor } from "../controllers/vendorController.js";
import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

router.get("/", getVendors);
router.get("/module/:moduleId", getVendorsByModule);
router.post("/", adminProtect, createVendor);
router.put("/:id", adminProtect, updateVendor);
router.delete("/:id", adminProtect, deleteVendor);

export default router;
