const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const TripSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,
    unique: true
  },
  location: {
    type: String,
    unique: true
  }
});

// This creates our model from the above schema, using mongoose's model method
const Trip = mongoose.model("Trip", TripSchema);

// Export the User model
module.exports = Trip;