const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: [true, "can't be blank"],
    index: { unique: true },
  },
  profile: {
    type: String,
    maxLength: [15000, "image is too big"],
  },
});

module.exports = mongoose.model("Image", imageSchema);
