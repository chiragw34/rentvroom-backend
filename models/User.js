const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  dIssue: String,
  dReturn: String,
});

module.exports = mongoose.model("Users", UserSchema);
