const express = require("express");
const PORT = 5500;
const connect = require("./configs/db");

const productController = require("./controllers/products.controller");
const reviewController = require("./controllers/review.controller");

const app = express();

app.use(express.json());

app.use("/product", productController);
app.use("/review", reviewController);

app.listen(PORT, async function () {
  try {
    await connect();
  } catch (e) {
    console.log(e.message);
  }
  console.log(`Listening on port: ${PORT}`);
});
