const jwt = require("jsonwebtoken");

const verifyJWT = async (req, res, next) => {
  try {
    const authorization = await req.headers.authorization;

    if (!authorization) {
      return res
        .status(401)
        .send({ error: true, message: "unAuthorized Access" });
    }

    const token = await authorization.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log("jwt token verify failed for ==> ", err.message);

        return res
          .status(401)
          .send({ error: true, message: "unAuthorized Access" });
      }
      req.verified = true;
      next();
    });
  } catch (error) {
    console.log("Something worng in server ==> ", error);
    return res
      .status(401)
      .json({ error: true, message: "Unauthorized Access" });
  }
};

module.exports = verifyJWT;
