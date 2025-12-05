import express from "express";
import { getModules, createModule, updateModule, deleteModule } from "../controllers/moduleController.js";
import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

router.get("/", getModules);
router.post("/", adminProtect, createModule);
router.put("/:id", adminProtect, updateModule);
router.delete("/:id", adminProtect, deleteModule);

export default router;
