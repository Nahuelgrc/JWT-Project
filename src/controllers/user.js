const express = require("express");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middlewares/login");
const { signFirm } = require("../utils/jwt");
const schemas = require("../schemas");
const schemaValidator = require("../middlewares/SchemaValidator");
const router = express.Router();

router.post(
  "/registerAndLogin",
  schemaValidator(schemas.registerAndLoginSchema),
  async (req, res) => {
    const { username, password, repassword } = req.body;
    console.log("🚀 ~ file: user.js ~ line 14 ~ repassword", repassword)
    console.log("🚀 ~ file: user.js ~ line 14 ~ password", password)
    console.log("🚀 ~ file: user.js ~ line 14 ~ username", username)

    res.json();
  }
);

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const privateKey = process.env.SECRET_KEY;
});

router.get("/name", verifyToken, async (req, res) => {
  res.json({ name: "Juan" });
});

module.exports = router;
