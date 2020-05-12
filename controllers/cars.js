const Cars = require("../models/Cars");

// get all cars
exports.getCars = async (req, res, next) => {
  try {
    const data = await Cars.find();
    res.status(200).send({ success: true, count: data.length, cars: data });
  } catch (err) {
    res.status(200).send({ success: false, error: err });
  }
};

// get particular car
exports.getCar = async (req, res, next) => {
  try {
    const id = req.params.carId;
    const car = await Cars.findById(id);
    res.status(200).send({ success: true, car });
  } catch (err) {
    res.status(200).send({ success: false, error: err });
  }
};

// add new car
exports.addNewCar = async (req, res) => {
  try {
    const {
      name,
      image,
      description,
      vehicle_no,
      capacity,
      color,
      available,
      current_booking,
      rent,
    } = req.body;

    const newCar = await Cars.create({
      name,
      image,
      description,
      vehicle_no,
      capacity,
      color,
      available,
      current_booking,
      rent,
    });

    res.status(200).send({ success: true, "new car": newCar });
  } catch (err) {
    res.status(200).send({ success: false, error: err });
  }
};
