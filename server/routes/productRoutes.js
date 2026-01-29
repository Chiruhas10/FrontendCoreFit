// productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch {
    res.status(404).json({ error: "Product not found" });
  }
});

// POST product
router.post("/", async (req, res) => {
  console.log("ADD PRODUCT BODY:", req.body); // 👈 DEBUG LINE

  const product = new Product(req.body);
  const savedProduct = await product.save();

  res.json(savedProduct);
});


// UPDATE product
router.put("/:id", async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedProduct);
});

// DELETE product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted successfully" });
});

module.exports = router;
