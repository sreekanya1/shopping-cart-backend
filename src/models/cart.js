const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
    },
    productImage: {
      type: String,
    },
    productPrice: {
      type: Number,
    },
    totalDiscountPrice: {
      type: Number,
    },
    discountOffer: {
      type: Number,
    },
    discountAmount: {
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

module.exports = mongoose.model("Cart", cartSchema);
