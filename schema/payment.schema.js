const { Schema, model, mongoose } = require("mongoose");

const paymentSchema = new Schema({
  email: String,
  transactionId: String,
  price: Number,
  date: Date,
  quantity: Number,
  cartItems: String,
  status: String,
  itemNames: String,
});

const Payment = model("Payment", paymentSchema);

module.exports = Payment;
