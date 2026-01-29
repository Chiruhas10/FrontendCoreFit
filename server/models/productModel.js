const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  desc: String,
  img: String,
  price: String,
  size: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model("Product", productSchema);
