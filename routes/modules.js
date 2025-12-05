import express from "express";
import Module from "../models/Module.js";
import { adminProtect } from "../middleware/adminProtect.js";

const router = express.Router();

// Get all modules
router.get("/", async (req, res) => {
  const modules = await Module.find();
  res.json(modules);
});

// Create module
router.post("/", adminProtect, async (req, res) => {
  const module = new Module({ name: req.body.name });
  await module.save();
  res.status(201).json(module);
});

// Update module
router.put("/:id", adminProtect, async (req, res) => {
  const module = await Module.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
  res.json(module);
});

// Delete module
router.delete("/:id", adminProtect, async (req, res) => {
  await Module.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
