const express = require("express");
const PORT = 5500;
const connect = require("./configs/db");

const productController = require("./controllers/products.controller");

const app = express();

app.use(express.json());

app.use("/product", productController);

app.listen("1234", async function () {
  try {
    await connect();
    console.log("Listening PORT 1234");
  } catch (e) {
    console.log(e.message);
  }
});
