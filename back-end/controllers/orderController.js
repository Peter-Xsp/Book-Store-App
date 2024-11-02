const Order = require("../models/Order");
const Book = require("../models/Book");

const createOrder = async (req, res) => {
  const { userId, books } = req.body;
  try {
    let total = 0;
    for (const book of books) {
      const item = await Book.findById(book.bookId);
      if (item) {
        total += item.price * book.quantity;
      }
    }

    const order = new Order({ user: userId, books, total });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("books.book");
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
};
