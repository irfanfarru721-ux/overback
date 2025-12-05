import SubCategory from "../models/SubCategory.js";

// Get all subcategories
export const getSubCategories = async (req, res) => {
  try {
    const subs = await SubCategory.find();
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get by category
export const getSubCategoriesByCategory = async (req, res) => {
  try {
    const subs = await SubCategory.find({ categoryId: req.params.categoryId });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create subcategory
export const createSubCategory = async (req, res) => {
  try {
    const sub = new SubCategory(req.body);
    await sub.save();
    res.status(201).json(sub);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
export const updateSubCategory = async (req, res) => {
  try {
    const updatedSub = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSub);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
export const deleteSubCategory = async (req, res) => {
  try {
    await SubCategory.findByIdAndDelete(req.params.id);
    res.json({ message: "Subcategory deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
