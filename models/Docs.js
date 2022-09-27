const mongoose = require("mongoose");
const docsSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  answer: {
    type: String,
    required: true,
  },
  topic: { type: String, required: true },
  img: {
    type: String,
    required: false,
  },
});
const Docs = mongoose.model("Docs", docsSchema);
module.exports = Docs;
