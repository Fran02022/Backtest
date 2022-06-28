const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.get("/getuserid/:userId", (req, res) => {
const { userId } = req.params;
console.log(userId,req.params);
  res.json(userId);
});
app.get("/getuserid/:userId", (req, res) => {
   console.log(req.params);
    res.json("Estas pegando como un kpo");
  });
app.post("/createuser", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
