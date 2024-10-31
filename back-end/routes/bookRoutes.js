const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post(
  "/books",
  authMiddleware,
  upload.single("image"),
  bookController.createBook
);
router.get("/books", bookController.getBooks);
router.put(
  "/books/:id",
  authMiddleware,
  upload.single("image"),
  bookController.updateBook
);
router.delete("/books/:id", authMiddleware, bookController.deleteBook);

module.exports = router;
