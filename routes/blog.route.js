const router = require("express").Router();
const Blog = require("../schema/blog.schema");

router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
    console.log("blogs", blogs);
  } catch (error) {
    res.json("blogs not found");
  }
});

module.exports = router;
