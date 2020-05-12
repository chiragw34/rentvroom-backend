const express = require("express");
const { getCars, getCar, addNewCar } = require("../controllers/cars");

const router = express.Router();

router.get("/all", getCars);
router.get("/:carId", getCar);

router.post("/new", addNewCar);

module.exports = router;
