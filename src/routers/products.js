const router = require("express").Router();
const {
  getProducts,
  addProducts,
} = require("../controllers/productController");

router.get("/products", getProducts);
router.post("/add-products", addProducts);

module.exports = router;
