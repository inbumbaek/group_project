const mongoose = require("mongoose");

const PlantSchema = {
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name requires at least 3 characters"],
  },
  lighting: {
    type: String,
    enum: ["South", "West", "East", "North"],
    required: [true, "Cardinal direction is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [3, "Description requires at least 3 characters"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    // set: (value) => parseFloat(value).toFixed(2),
    // get: (value) => parseFloat(value).toFixed(2),
  },
  sellerName: {
    type: String,
    required: [true, "Your name is required"],
  },
  sellerEmail: {
    type: String,
    required: [true, "Your Email is required"],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please enter a valid email address",
    ],
  },
};

module.exports = mongoose.model("Plant", PlantSchema);
