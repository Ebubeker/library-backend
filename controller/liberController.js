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
};

const getLibrat = (req, res) => {
  Liber.find().then((result) => res.json({ result }));
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
  console.log(bookObj.isbn);

  Liber.findOneAndUpdate({ isbn: bookObj.isbn }, bookObj).catch((err) =>
    console.log(err)
  );
};

module.exports = {
  createBook,
  getLibrat,
  deleteLiber,
  decreaseStock,
  updateBook,
  increaseStock,
};
