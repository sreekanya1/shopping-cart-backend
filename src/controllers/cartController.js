const Cart = require("../models/cart");

const addToCart = async (req, res) => {
  const {
    productImage,
    productName,
    productPrice,
    quantity,
    _id,
    userId,
    totalDiscountPrice,
    discountOffer,
    discountAmount,
  } = req.body;
  const cartDetails = {
    userId: userId,
    productId: _id,
    productName: productName,
    productPrice: productPrice,
    productImage: productImage,
    quantity: quantity,
    totalDiscountPrice: totalDiscountPrice,
    discountOffer: discountOffer,
    discountAmount: discountAmount,
    active: true,
  };
  const addCart = new Cart(cartDetails);
  try {
    await addCart.save();
    res.status(200).send(addCart);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};
const getCarts = async (req, res) => {
  try {
    const getCart = await Cart.find({ userId: req.params.id });
    res.status(200).send(getCart);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
const updateCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      productId,
      { quantity: quantity },
      { new: true }
    );
    res.status(200).send(updatedCart);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
const deleteCart = async (req, res) => {
  try {
    const deleteCart = await Cart.deleteMany({ _id: req.params.id });
    res.status(200).send(deleteCart);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
module.exports = {
  addToCart,
  getCarts,
  deleteCart,
  updateCart,
};
