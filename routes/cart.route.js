const router = require("express").Router();
const verifyJWT = require("../middleware/token-verify");
const Cart = require("../schema/cart.schema");

router.get("/", verifyJWT, async (req, res) => {
  try {
    if (!req.verified) res.send([]);

    const { email } = req.query;
    if (!email) res.send("Bad request");
    const result = await Cart.find({ email });
    console.log(result);
    res.status(200).send({ result });
  } catch (error) {
    res.json("cart error");
  }
});

module.exports = router;
