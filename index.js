require("dotenv").config();
const express = require("express");
// const mysql = require("mysql");
const user = require("./controllers/user");
const app = express();
const db = require("./data/models/index");

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    33;
  });

const PORT = process.env.PORT || 8080;

app.get("/v1/", (req, res) => {
  res.json({ Response: "Hello World!" });
});

app.use("/v1/user", user);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
