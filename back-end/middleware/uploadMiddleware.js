const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const imgFilter = (req, file, cb) => {
  const types = /jpeg|jpg|png/;
  const mimeType = types.test(file.mimetype);
  const extname = types.test(path.extname(file.originalname).toLowerCase());
  if (mimeType && extname) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPG or PNG allowed!"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: imgFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = upload;
