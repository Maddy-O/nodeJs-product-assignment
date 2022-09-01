const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.send(product);
  } catch (e) {
    return res.send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    return res.send(product);
  } catch (e) {
    return res.send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    if (product) {
      return res.send(product);
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (e) {
    return res.send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send(product);
  } catch (e) {
    return res.send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.send(product);
  } catch (e) {
    return res.send(e.message);
  }
});

module.exports = router;
