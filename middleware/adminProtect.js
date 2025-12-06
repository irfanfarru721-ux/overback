import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const adminProtect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      console.log("Authorization header missing");
      return res.status(401).json({ message: "Not authorized: no token" });
    }

    if (!authHeader.startsWith("Bearer ")) {
      console.log("Authorization header does not start with 'Bearer'");
      return res.status(401).json({ message: "Not authorized: invalid format" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      console.log("Token missing after Bearer");
      return res.status(401).json({ message: "Not authorized: empty token" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    } catch (err) {
      console.log("JWT verification failed:", err.message);
      return res.status(401).json({ message: "Not authorized: invalid token" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      console.log("User not found for ID:", decoded.id);
      return res.status(401).json({ message: "Not authorized: user not found" });
    }

    if (user.role !== "admin") {
      console.log("User role is not admin:", user.role);
      return res.status(401).json({ message: "Not authorized: not an admin" });
    }

    // attach user to request and continue
    req.user = user;
    console.log("Admin authorized:", user.email);
    next();
  } catch (err) {
    console.log("Admin protection error:", err);
    res.status(401).json({ message: "Not authorized: unknown error" });
  }
};
