import Product from "../models/Product.js";
import mongoose from "mongoose";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("vendorId")
      .populate("categoryId")
      .populate("subCategoryId");
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get products by category
export const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }
    const products = await Product.find({ categoryId });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create product
export const createProduct = async (req, res) => {
  try {
    const { name, price, vendorId, categoryId, subCategoryId, description } = req.body;

    if (!name || !price || !vendorId || !categoryId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = new Product({ name, price, vendorId, categoryId, subCategoryId, description });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
