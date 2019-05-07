const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  userId: {
    type: String,
    trim: true,
    required: "ID is required.",
  },
  name: {
    type: String,
    trim: true,
    required: "Username is required",
  },
  tripName: {
    type: String,
    trim: true,
    required: "tripName title required.",
  },
  location: {
    type: String,
    trim: true,
    required: "A location is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;