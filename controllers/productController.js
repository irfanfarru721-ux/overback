import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("vendorId")
      .populate("categoryId")
      .populate("subCategoryId");

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      categoryId: req.params.categoryId,
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
