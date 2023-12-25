const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  name: String,
  img: String,
  price: Number,
  email: String,
  productId: String,
});

const Cart = model("Cart", CartSchema);

module.exports = Cart;
