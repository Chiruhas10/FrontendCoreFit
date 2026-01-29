const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    email: String,
    productId: String   // optional (for future use)
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);
