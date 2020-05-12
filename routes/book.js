const express = require("express");
const {bookCar, cancelBooking} = require('../controllers/book')

const router = express.Router();

router.post('/:carId', bookCar);
router.delete("/:carId/cancel", cancelBooking);

module.exports = router;
