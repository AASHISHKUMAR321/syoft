const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  count: { type: Number, required: true },
  description: { type: String },
});

module.exports = mongoose.model("prod", productSchema);
