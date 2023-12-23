const Product = require("../schema/product.schema");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.json("products not found");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.send(product);
  } catch (error) {
    res.json("single product fetch failed");
  }
});

module.exports = router;
