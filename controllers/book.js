const User = require("../models/User");
const Cars = require("../models/Cars");

// book a car
exports.bookCar = async (req, res) => {
  try {
    const carId = req.params.carId;
    const selectedCar = await Cars.findById(carId);

    if (selectedCar.available) {
      // car is available
      const { name, phone, dReturn, dIssue } = req.body;
      const userData = {
        name,
        phone,
        dReturn,
        dIssue,
      };
      const updatedCar = await Cars.findOneAndUpdate(carId, {
        $set: { current_booking: userData, available: false },
      });
      await updatedCar.save();
      res.status(200).send({ success: true });
    } else {
      // car is not available
      res
        .status(404)
        .send({
          success: false,
          error: { message: "not available for booking" },
        });
    }
  } catch (err) {
    res.status(200).send({ success: false, error: err });
  }
};

// cancel booking
exports.cancelBooking = async (req, res) => {
  try {
    const carId = req.params.carId;
    const updatedCar = await Cars.findOneAndUpdate(carId, {
      $set: { current_booking: {}, available: true },
    });
    await updatedCar.save();
    res.status(200).send({ success: true });
  } catch (err) {
    res.status(200).send({ success: false, error: err });
  }
};
