const Order = require("../models/Order");
const Book = require("../models/Book");

const createOrder = async (req, res) => {
  const { userId, books } = req.body;
  try {
    const mergedBooks = books.reduce((acc, currentBook) => {
      const existingBook = acc.find(
        (item) => item.bookId === currentBook.bookId
      );

      if (existingBook) {
        existingBook.quantity += currentBook.quantity;
      } else {
        acc.push({ ...currentBook });
      }
      return acc;
    }, []);

    let total = 0;
    for (const book of mergedBooks) {
      const item = await Book.findById(book.bookId);
      if (item) {
        total += item.price * book.quantity;
      }
    }

    const order = new Order({ user: userId, books: mergedBooks, total });
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: No user ID found" });
    }

    const orders = await Order.find({ user: userId }).populate("books.book");

    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
};
