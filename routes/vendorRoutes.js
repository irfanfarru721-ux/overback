import express from "express";
import { getVendors, getVendorsByModule, createVendor } from "../controllers/vendorController.js";
import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

router.get("/", getVendors);
router.get("/module/:moduleId", getVendorsByModule);
router.post("/", adminProtect, createVendor);

export default router;
