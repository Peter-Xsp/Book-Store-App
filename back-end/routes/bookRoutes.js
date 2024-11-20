const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post(
  "",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  bookController.createBook
);
router.get("", bookController.getBooks);
router.get("/:id", authMiddleware, adminMiddleware, bookController.getBookById);
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  bookController.updateBook
);
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  bookController.deleteBook
);

module.exports = router;
