const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  books: [
    {
      _id: false,
      book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      quantity: { type: Number, default: 1 },
    },
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
