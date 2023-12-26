const express = require("express");
const dotenv = require("dotenv");
const connection = require("./db.connection");
const productRoute = require("./routes/product.route");
const cartRoute = require("./routes/cart.route");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const paymentRoute = require("./routes/payment.route");

const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/products", productRoute);
app.use("/auth", authRoute);
app.use("/", cartRoute);
app.use("/", userRoute);
app.use("/", paymentRoute);

app.get("/", async (req, res) => {
  return res.json({ message: "Mitnog Data Showing Here" });
});

const start = async () => {
  try {
    await connection();
    app.listen(port, () =>
      console.log(`Server started on http://localhost:${port}`)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
