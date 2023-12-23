const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  id: String,
  name: String,
  category: String,
  seller: String,
  img: String,
  price: Number,
  stock: Number,
  ratings: Number,
  ratingsCount: Number,
  shipping: Number,
  quantity: Number,
  email: String,
  productId: String,
});

const Cart = model("Cart", CartSchema);

module.exports = Cart;
