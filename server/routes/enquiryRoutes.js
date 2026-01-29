const express = require("express");
const router = express.Router();
const Enquiry = require("../models/enquiryModel");

router.post("/enquiries", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.json({ message: "Enquiry saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save enquiry" });
  }
});

// GET all enquiries
router.get("/enquiries", async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
});


module.exports = router;
