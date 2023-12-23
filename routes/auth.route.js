const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.TOKEN_SECRET);
    res.send({ token });
  } catch (error) {
    console.log("login failed for ==> ", error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
