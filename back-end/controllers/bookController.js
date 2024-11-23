const Book = require("../models/Book");

const createBook = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image is required!" });
    }

    const book = new Book({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    await book.save();

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    const booksWithImages = books.map((book) => {
      if (book.image && book.image.data) {
        const base64Image = book.image.data.toString("base64");
        const imageSrc = `data:${book.image.contentType};base64,${base64Image}`;
        return {
          ...book.toObject(),
          image: imageSrc,
        };
      }
      return book;
    });

    res.json(booksWithImages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    let bookWithImage = book.toObject();
    if (book.image && book.image.data) {
      const base64Image = book.image.data.toString("base64");
      bookWithImage.image = `data:${book.image.contentType};base64,${base64Image}`;
    }

    res.json(bookWithImage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedFields = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
    };

    if (req.file) {
      updatedFields.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const book = await Book.findByIdAndUpdate(req.params.id, updatedFields, {
      new: true,
    });

    if (book.image && book.image.data) {
      const base64Image = book.image.data.toString("base64");
      book.image = `data:${book.image.contentType};base64,${base64Image}`;
    }

    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
  getBookById,
};
