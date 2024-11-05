const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post(
  "",
  authMiddleware,
  upload.single("image"),
  bookController.createBook
);
router.get("", bookController.getBooks);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  bookController.updateBook
);
router.delete(":id", authMiddleware, bookController.deleteBook);

module.exports = router;
