const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleID: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    required: "Name is required.",
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email is required.",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required.",
  },
  updates: {
    type: Boolean,
      unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;