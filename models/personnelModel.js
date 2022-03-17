const mongoose = require("mongoose");

const personnelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  position: {
    type: String,
    required: [true, "Please enter a position"],
  },
});

const Personnel = mongoose.model("Personnel", personnelSchema);

module.exports = Personnel;
