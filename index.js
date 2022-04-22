require("dotenv").config();
const express = require("express");
const user = require("./src/controllers/user");
const app = express();
const db = require("./src/data/models/index");

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
  });

const PORT = process.env.PORT || 8080;

app.get("/v1/", (_, res) => {
  res.json({ Response: "It's working" });
});

app.use("/v1/user", user);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
