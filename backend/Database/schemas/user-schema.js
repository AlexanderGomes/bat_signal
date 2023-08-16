const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  range: Number,
  sex: { type: String, default: null },
  description: { type: String, default: null },
  lastBatSignalUsedAt: { type: Date, default: null },
  isBatSignalBlocked: { type: Boolean, default: false },
});

module.exports = mongoose.model("user", User);
