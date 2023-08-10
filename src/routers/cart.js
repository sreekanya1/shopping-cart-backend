const router = require("express").Router();
const {
  addToCart,
  getCarts,
  deleteCart,
  updateCart,
} = require("../controllers/cartController");

router.get("/carts/:id", getCarts);
router.post("/add-to-cart", addToCart);
router.delete("/delete-cart/:id", deleteCart);
router.put("/update-cart", updateCart);

module.exports = router;
