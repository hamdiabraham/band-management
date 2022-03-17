const mongoose = require("mongoose");

const bandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter band name"],
  },
  maxPersonnel: {
    type: Number,
    required: [true, "A tour must have a group size!"],
  },
  member: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Personnel",
      validate: {
        validator: function (val) {
          return val.length <= this.maxPersonnel;
        },
        message: "members exceed the maximum number of Personnel",
      },
    },
  ],
});

const Band = mongoose.model("Band", bandSchema);

module.exports = Band;
