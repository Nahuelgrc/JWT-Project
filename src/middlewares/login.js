const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (!bearerHeader) {
    res.status(401).end();
  }

  const bearerToken = bearerHeader.split(" ")[1];

  let payload;
  try {
    payload = jwt.verify(bearerToken, process.env.SECRET_KEY);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      // if the error thrown is because the JWT is unauthorized, return a 401 error
      return res.status(401).end();
    }
    // otherwise, return a bad request error
    return res.status(400).end();
  }

  next();
};

module.exports = {
  verifyToken,
};
