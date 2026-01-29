const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://chiruhas10_db_user:SV8lECoMyZ0ti14B@corefit.7slanj8.mongodb.net/?appName=CoreFit")

  .then(() => {
    console.log("MongoDB connected ✅")
})
  
  .catch((err) => {
    console.log("MongoDB error ❌", err)});