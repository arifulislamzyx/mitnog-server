const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_Uri);
    console.log("db connected");
    return conn;
  } catch (error) {
    console.log("db connection failed ==>", error);
  }
};

module.exports = connection;
