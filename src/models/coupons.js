const mongoose = require("mongoose");

const coupon = new mongoose.Schema(
  {
    couponId: {
      type: String,
    },
    offerPrice: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: "createdOn", updatedAt: "modifiedOn" } }
);

module.exports = mongoose.model("coupon", coupon);
