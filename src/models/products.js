const mongoose = require("mongoose");

const addProduct = new mongoose.Schema(
  {
    productName: {
      type: String,
    },
    productImage: {
      type: String,
    },
    productPrice: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: "createdOn", updatedAt: "modifiedOn" } }
);

const Product = mongoose.model("product", addProduct);

module.exports = Product;
