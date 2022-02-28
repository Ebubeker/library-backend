const express = require("express");
const {
  createCupon,
  listCupon,
  deleteCupon,
} = require("../controller/cuponController");
const router = express.Router();

router.post("/createCupon", createCupon);
router.get("/listCupon", listCupon);
router.delete("/deleteCupon/:id", deleteCupon);

module.exports = router;
