const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const liber = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shelf: {
      type: String,
      required: true,
    },
    row: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    isbn: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const liberReg = mongoose.model("Libers", liber);

module.exports = liberReg;
