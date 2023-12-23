const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  id: String,
  name: String,
  category: String,
  seller: String,
  image: String,
  price: Number,
  stock: Number,
  ratings: Number,
  ratingsCount: Number,
  shipping: Number,
  quantity: Number,
});

const Product = model("Product", ProductSchema);

module.exports = Product;
