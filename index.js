require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { mongoDbConnect } = require("./mongoConnect");
const cors = require("cors");
const shoppingCartApis = require("./src/routers/index");
const app = express();
app.use(bodyParser.json());
app.get("", (req, res) => {
  return res.send("Back end is started").status(200);
});
mongoDbConnect();
app.use(cors());
app.use(shoppingCartApis);
app.use((req, res, next) => {
  res.header("http://localhost:5000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(
  process.env.PORT,
  console.log(`Server started at ${process.env.PORT}`)
);
