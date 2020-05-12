const mongoose = require("mongoose");

const CarsSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  vehicle_no: String,
  color: String,
  available: Boolean,
  current_booking: {
    name: String,
    phone: Number,
    dIssue: String,
    dReturn: String,
  },
  capacity: Number,
  rent: Number,
});

module.exports = mongoose.model('Cars', CarsSchema)