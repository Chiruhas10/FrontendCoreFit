const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel");

// CREATE admin
router.post("/admins", async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const savedAdmin = await admin.save();
    res.json(savedAdmin);
  } catch (err) {
    res.status(500).json({ error: "Failed to create admin" });
  }
});

// GET all admins
router.get("/admins", async (req, res) => {
  const admins = await Admin.find();
  res.json(admins);
});

// DELETE admin
router.delete("/admins/:id", async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.json({ message: "Admin deleted" });
});

// ADMIN LOGIN
router.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.json({ success: false, message: "Admin not found" });
    }

    if (admin.password !== password) {
      return res.json({ success: false, message: "Invalid password" });
    }

    res.json({
      success: true,
      message: "Login successful"
    });

  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});


module.exports = router;
