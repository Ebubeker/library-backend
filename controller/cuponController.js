const Cupon = require("../models/cupon.model");

const createCupon = (req, res) => {
  const cuponObj = req.body.cuponInfo;

  const newCupon = new Cupon({
    emri: cuponObj.name,
    isbn: cuponObj.bookId,
    dataEMarrjes: cuponObj.dataM,
    dataEKthimit: cuponObj.dataK,
    slug: cuponObj.slug,
  });

  newCupon.save();
};

const listCupon = (req, res) => {
  Cupon.find().then((result) => {
    res.json({ result });
  });
};

const deleteCupon = (req, res) => {
  const id = req.params.id;
  Cupon.deleteOne({ _id: id })
    .then((res) => true)
    .catch((err) => console.log(err));
};

module.exports = {
  createCupon,
  listCupon,
  deleteCupon,
};
