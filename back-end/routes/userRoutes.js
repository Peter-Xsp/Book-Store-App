const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/users", userController.getUsers);
router.put("/user", authMiddleware, userController.updateUser);
router.delete("/user", authMiddleware, userController.deleteUser);

module.exports = router;
