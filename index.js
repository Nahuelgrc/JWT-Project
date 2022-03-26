const express = require("express");
const user = require("./controllers/user");
const app = express();
app.use(express.json());

const port = 3001;

app.get("/", (req, res) => {
  res.json({ Response: "Hello World!" });
});

app.use("/user", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
