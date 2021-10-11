const mongoose = require("mongoose");

const schema = mongoose.Schema;
const TeamSchema = new schema({
  name: { type: String, required: true, default: "" },
  TOP: {
    type: mongoose.ObjectId,
    ref: "player",
  },
  MID: {
    type: mongoose.ObjectId,
    ref: "player",
  },
  Jungle: {
    type: mongoose.ObjectId,
    ref: "player",
  },
  ADC: {
    type: mongoose.ObjectId,
    ref: "player",
  },
  Support: {
    type: mongoose.ObjectId,
    ref: "player",
  },
});
module.exports = mongoose.model("team", TeamSchema);
