import SubCategory from "../models/SubCategory.js";

export const getSubCategories = async (req, res) => {
  try {
    const sub = await SubCategory.find().populate("categoryId");
    res.json(sub);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSubCategoriesByCategory = async (req, res) => {
  try {
    const sub = await SubCategory.find({
      categoryId: req.params.categoryId,
    });
    res.json(sub);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createSubCategory = async (req, res) => {
  try {
    const sub = new SubCategory(req.body);
    await sub.save();
    res.status(201).json(sub);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
