const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, res) => {
    res(null, "uploads/");
  },
  filename: (req, file, res) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    res(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

const imgFilter = (req, file, res) => {
  const types = /jpeg|jpg|png/;
  const mimeType = types.test(file.mimetype);
  const extname = types.test(path.extname(file.originalname).toLowerCase());
  if (mimeType && extname) {
    return res(null, true);
  }
  res(new Error("Invalid file type. Try JPG or PNG file!"));
};

const upload = multer({
  storage: storage,
  fileFilter: imgFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = upload;
