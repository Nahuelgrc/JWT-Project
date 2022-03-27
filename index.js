require("dotenv").config();
const express = require("express");
const user = require("./controllers/user");
const app = express();
app.use(express.json());

const port = 3001;

app.get("/v1/", (req, res) => {
  res.json({ Response: "Hello World!" });
});

app.use("/v1/user", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
