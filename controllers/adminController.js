import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email });

    if (!admin) return res.status(404).json({ message: "User not found" });
    if (admin.role !== "admin")
      return res.status(403).json({ message: "Not an admin" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "7d" }
    );

    res.json({ message: "Admin login successful", token, admin });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
