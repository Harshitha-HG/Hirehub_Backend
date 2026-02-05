const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  year: String,
  cgpa: String,
  skills: String
});

module.exports = mongoose.model("User", UserSchema);

