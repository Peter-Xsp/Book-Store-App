const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/all", authMiddleware, adminMiddleware, userController.getUsers);
router.put("", authMiddleware, userController.updateUser);
router.delete("", authMiddleware, userController.deleteUser);

module.exports = router;
