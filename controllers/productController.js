import Product from "../models/Product.js";

// Get all products
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

// Get products by category
export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ categoryId: req.params.categoryId })
      .populate("vendorId")
      .populate("categoryId")
      .populate("subCategoryId");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
