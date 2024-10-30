const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const { userId, books, total } = req.body;
  try {
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
