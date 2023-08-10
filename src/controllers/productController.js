const Product = require("../models/products");

const addProducts = async (req, res) => {
  console.log("req.body", req.body);
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = {
  getProducts,
  addProducts,
};

// crud functions
