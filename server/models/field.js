const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: [true, "can't be blank"],
    index: { unique: true },
  },
  fields: {
    type: Object,
  },
  lastDone: {
    type: Array,
  },
  lastUpdateTime: {
    type: Date,
  },
  history: {
    type: Object,
  },
  streaks: {
    type: Object,
  },
  update: {
    type: Array,
  },
});

module.exports = mongoose.model("Field", fieldSchema);
