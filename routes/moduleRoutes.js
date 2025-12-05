import express from "express";
import { getModules, createModule } from "../controllers/moduleController.js";
import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

router.get("/", getModules);
router.post("/", adminProtect, createModule);

export default router;
