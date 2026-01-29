const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors());
app.use(express.json());

/* ---------- MONGODB CONNECTION ---------- */
mongoose.connect(
  "mongodb+srv://chiruhas10_db_user:SV8lECoMyZ0ti14B@corefit.7slanj8.mongodb.net/corefit?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB connected ✅"))
.catch((err) => console.log("MongoDB error ❌", err));

/* ---------- ROUTES ---------- */
app.use("/api/products", productRoutes);
app.use("/api", enquiryRoutes);
app.use("/api", adminRoutes);

/* ---------- TEST ---------- */
app.get("/", (req, res) => {
  res.send("CoreFit backend is running 🚀");
});

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
