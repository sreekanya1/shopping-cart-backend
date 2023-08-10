const router = require("express").Router();
const product = require("./products");
const user = require("./user");
const cart = require("./cart");
const coupon = require("./coupon");

router.use("/api", product);
router.use("/api", user);
router.use("/api", cart);
router.use("/api", coupon);

module.exports = router;
