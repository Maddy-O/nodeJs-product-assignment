const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: String, ref: "product", require: true },
    description: { type: String, require: true },
    _id: {
      type: String,
      default: function uuid() {
        return uuidv4();
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//----------Model--------------------
const review = mongoose.model("review", reviewSchema);

module.exports = review;
