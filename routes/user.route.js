const Users = require("../schema/user.schema");

const router = require("express").Router();

router.get("/users", async (req, res) => {
  const result = await Users.find();
  res.send(result);
  console.log("users is here", result);
});

router.post("/users/:id", async (req, res) => {
  const user = req.body;
  const query = { email: user.email };

  const existionUser = await Users.findOne(query);

  if (existionUser) {
    return { message: "User Already Exist" };
  }
  const result = await Users.create(user);
  res.send(result);
});

module.exports = router;
