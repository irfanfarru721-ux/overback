import Category from "../models/Category.js";

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get categories by vendor
export const getCategoriesByVendor = async (req, res) => {
  try {
    const categories = await Category.find({ vendorId: req.params.vendorId });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create category
export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
