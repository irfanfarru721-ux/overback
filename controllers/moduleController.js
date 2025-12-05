import Module from "../models/Module.js";

// Get all modules
export const getModules = async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new module
export const createModule = async (req, res) => {
  try {
    const module = new Module(req.body);
    await module.save();
    res.status(201).json(module);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a module
export const updateModule = async (req, res) => {
  try {
    const updatedModule = await Module.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedModule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a module
export const deleteModule = async (req, res) => {
  try {
    await Module.findByIdAndDelete(req.params.id);
    res.json({ message: "Module deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
