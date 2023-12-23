const jwt = require("jsonwebtoken");
const router = require("express").Router();

const verifyJWT = async (req, res, next) => {
  try {
    const authorization = await req.headers.authorization;

    if (!authorization) {
      return res
        .status(401)
        .send({ error: true, message: "unAuthorized Access" });
    }
    const token = await authorization.split(" ")[1];

    jwt.verify(token, "", (err, decoded) => {
      if (err) {
        console.log("jwt token signing failed for ==> ", err.message);

        return res
          .status(401)
          .send({ error: true, message: "unAuthorized Access" });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    console.log("Something worng in server ==> ", error);
    return res
      .status(401)
      .send({ error: true, message: "Unauthorized Access" });
  }
};

module.exports = verifyJWT;
