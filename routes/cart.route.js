const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const verifyJWT = require("../middleware/token-verify");
const Cart = require("../schema/cart.schema");
const { findByIdAndDelete } = require("../schema/product.schema");

router.get("/carts", verifyJWT, async (req, res) => {
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

router.post("/carts", async (req, res) => {
  const cartItems = req.body;
  console.log("carts Body", cartItems);
  try {
    const addCollection = await Cart.create(cartItems);
    res.status(200).send({ addCollection });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// router.delete("/:id", async (req, res) => {
//   const id = req.params.id;

//   try {
//     if (!mongoose.isValidObjectId(id)) {
//       return res.status(400).json({ error: "Invalid ID" });
//     }

//     const deletedItem = await Cart.findByIdAndDelete(id);

//     if (!deletedItem) {
//       return res.status(404).json({ error: "Item not found" });
//     }

//     res.status(200).json({ message: "Item deleted successfully", deletedItem });
//   } catch (error) {
//     console.error("Error deleting item:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

module.exports = router;
