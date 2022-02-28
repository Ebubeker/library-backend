const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cupon = new Schema(
  {
    emri: {
      type: String,
      required: true,
    },
    isbn: {
      type: Number,
      required: true,
    },
    dataEMarrjes: {
      type: String,
      required: true,
    },
    dataEKthimit: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const cuponReg = mongoose.model("cupons", cupon);

module.exports = cuponReg;
