const express = require("express");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./../helper");
const router = express.Router();

router.post("/register", async (req, res) => {});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
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
});

router.get("/name", verifyToken, async (req, res) => {
  res.json({ name: "Juan" });
});

module.exports = router;
