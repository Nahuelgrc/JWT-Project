const jwt = require("jsonwebtoken");

const signFirm = () => {
  const privateKey = process.env.SECRET_KEY;

  jwt.sign(
    { user: username },
    privateKey,
    { algorithm: "HS512", expiresIn: "30m" },
    (err, token) => {
      res.json({
        token,
      });
    }
  );
};

module.exports = {
  signFirm,
};
