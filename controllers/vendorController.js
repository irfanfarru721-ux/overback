import Vendor from "../models/Vendor.js";

// Get all vendors
export const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().populate("moduleId");
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get vendors by module
export const getVendorsByModule = async (req, res) => {
  try {
    const vendors = await Vendor.find({ moduleId: req.params.moduleId });
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create vendor
export const createVendor = async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).json(vendor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
