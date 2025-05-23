const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgurl: { type: String, required: true },
});

module.exports = mongoose.model("Card", cardSchema);
