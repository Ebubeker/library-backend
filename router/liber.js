const express = require("express");
const {
  createBook,
  getLibrat,
  deleteLiber,
  decreaseStock,
  updateBook,
  increaseStock,
  searchByName,
} = require("../controller/liberController");
const router = express.Router();

router.post("/createLiber", createBook);
router.get("/getLibrat", getLibrat);
router.delete("/deleteLiber/:id", deleteLiber);
router.post("/decreaseStock", decreaseStock);
router.post("/increaseStock", increaseStock);
router.post("/updateBook", updateBook);
router.get("/searchByName/:name", searchByName);

module.exports = router;
