const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

// GET all products
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET single product
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(404).json({ error: "Product not found" });
  }
});

// POST product
router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  const savedProduct = await product.save();
  res.json(savedProduct);
});

// UPDATE product
router.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

// DELETE product
router.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

// ADD SIZE to product
router.put("/products/:id/add-size", async (req, res) => {
  try {
    const { size } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { size } },
      { new: true }
    );

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to add size" });
  }
});

module.exports = router;
