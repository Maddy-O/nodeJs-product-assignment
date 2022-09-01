const express = require("express");

const Review = require("../models/review.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    return res.send(review);
  } catch (e) {
    return res.send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(review);
  } catch (e) {
    return res.send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const review = await Review.find()
      .populate({
        path: "userId",
        select: ["name", "price"],
      })
      .lean()
      .exec();

    return res.send(review);
  } catch (e) {
    return res.send(e.message);
  }
});

module.exports = router;
