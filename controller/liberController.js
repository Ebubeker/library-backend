const Liber = require("../models/Liber.model");

const createBook = (req, res) => {
  const bookInfo = req.body.bookInfo;

  const newBook = new Liber({
    title: bookInfo.titulli,
    shelf: bookInfo.rafti,
    row: bookInfo.rreshti,
    category: bookInfo.kategoria,
    status: bookInfo.statusLibri,
    author: bookInfo.autori,
    stock: bookInfo.stocku,
    slug: bookInfo.slug,
    isbn: bookInfo.bookId,
  });

  newBook.save();

  res.send({
    bookname: newBook.title,
  });
};

const getLibrat = (req, res) => {
  Liber.find()
    .sort({ field: "asc", _id: -1 })
    .then((result) => res.json({ result }));
};

const deleteLiber = (req, res) => {
  const isbn = req.params.id;
  console.log(isbn);
  Liber.deleteOne({ isbn: isbn })
    .then((res) => true)
    .catch((err) => console.log(err));
};

const decreaseStock = (req, res) => {
  const isbn__t = req.body.isbn;
  const neStock = req.body.newStock;

  const updated = {
    stock: neStock,
  };

  Liber.findOneAndUpdate({ isbn: isbn__t }, updated).catch((err) =>
    console.log(err)
  );
};

const increaseStock = (req, res) => {
  const isbn__t = req.body.isbn;
  const neStock = req.body.newStock;

  const updated = {
    stock: neStock,
  };

  Liber.findOneAndUpdate({ isbn: isbn__t }, updated).catch((err) =>
    console.log(err)
  );
};

const updateBook = (req, res) => {
  const bookObj = req.body.book;

  Liber.findOneAndUpdate({ isbn: bookObj.isbn }, bookObj).catch((err) =>
    console.log(err)
  );
};

const searchByName = (req, res) => {
  const id = req.params.id;
  const name = id.split("-")[0];
  const category = id.split("-")[1];
  const sort = id.split("-")[2];

  if (sort === "emri_A_Z") {
    Liber.find({
      title: { $regex: name, $options: "i" },
      category: category,
    })
      .collation({ locale: "en", strength: 2 })
      .sort({ title: 1 })
      .then((resu) => res.send({ resu }));
  } else {
    Liber.find({
      title: { $regex: name, $options: "i" },
      category: category,
    })
      .sort([["stock", "desc"]])
      .then((resu) => res.send({ resu }));
  }
};

const searchBySpecial = (req, res) => {
  const id = req.params.id;
  const name = id.split("-")[0];
  const sort = id.split("-")[1];

  if (sort === "emri_A_Z") {
    Liber.find({
      title: { $regex: name, $options: "i" },
    })
      .collation({ locale: "en", strength: 2 })
      .sort({ title: 1 })
      .then((resu) => res.send({ resu }));
  } else {
    Liber.find({
      title: { $regex: name, $options: "i" },
    })
      .sort([["stock", "desc"]])
      .then((resu) => res.send({ resu }));
  }
};

module.exports = {
  createBook,
  getLibrat,
  deleteLiber,
  decreaseStock,
  updateBook,
  increaseStock,
  searchByName,
  searchBySpecial,
};
