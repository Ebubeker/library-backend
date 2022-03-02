const express = require("express");
const {
  createCupon,
  listCupon,
  deleteCupon,
  searchCuponByName,
} = require("../controller/cuponController");
const router = express.Router();

router.post("/createCupon", createCupon);
router.get("/listCupon", listCupon);
router.delete("/deleteCupon/:id", deleteCupon);
router.get("/searchKuponByName/:name", searchCuponByName);

module.exports = router;
