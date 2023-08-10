const router = require("express").Router();
const { getAllCoupons } = require("../controllers/couponController");

router.get("/coupons", getAllCoupons);

module.exports = router;
