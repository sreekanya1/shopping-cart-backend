const Coupon = require("../models/coupons");

const getAllCoupons = async (req, res) => {
  try {
    const coupon = await Coupon.find();
    res.status(200).send(coupon);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = {
  getAllCoupons,
};

// crud functions
