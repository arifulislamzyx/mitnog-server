const { Schema, model } = require("mongoose");

const BlogSchema = new Schema({
  _id: String,
  name: String,
  category: String,
  description: String,
  image: String,
});

const Blog = model("Blog", BlogSchema);

module.exports = Blog;
