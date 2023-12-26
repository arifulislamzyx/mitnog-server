const dotenv = require("dotenv");
const router = require("express").Router();
const Payment = require("../schema/payment.schema");
const stripe = require("stripe")(process.env.Stripe_Security_Key);
console.log("payment=>", process.env.Stripe_Security_Key);
const verifyJWT = require("../middleware/token-verify");
const Cart = require("../schema/cart.schema");

dotenv.config();

// router.post("/create-payment-intent", verifyJWT, async (req, res) => {
//   const { price } = req.body;
//   const amount = parseFloat(price * 100);
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: "usd",
//       payment_method_types: ["card"],
//     });
//     res.status(200).send({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.log("Payment Error=>", error);
//   }
// });

router.post("/payments", verifyJWT, async (req, res) => {
  const payment = req.body;
  try {
    const insertResult = await Payment.Create(payment);
  } catch (error) {
    console.log("payment not created=>", error);
  }
  try {
    const query = {
      _id: { $in: payment.cartItems.map((id) => ObjectId(id)) },
    };
    const deleteResult = await Cart.deleteMany(query);
    res.status(200).send({ insertResult, deleteResult });
  } catch (error) {
    console.log("paymnet not created =>", error);
  }
});
