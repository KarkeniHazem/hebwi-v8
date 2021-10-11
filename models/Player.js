const mongoose = require("mongoose");

const schema = mongoose.Schema;

const PlayerSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalpoints: {
    type: String,
  },
  form: {
    type: String,
  },
});
module.exports = mongoose.model("player", PlayerSchema);
