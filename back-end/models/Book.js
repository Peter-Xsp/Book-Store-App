const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Book", bookSchema);
