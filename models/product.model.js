const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
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
const product = mongoose.model("product", productSchema);

module.exports = product;
