const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, email, password } = req.body;

    const user = await User.findById(userId);

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      user.password = password;
    }

    await user.save();

    const updatedUser = user.toObject();
    delete updateUser.password;

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getCurrentUser,
  updateUser,
  deleteUser,
};
