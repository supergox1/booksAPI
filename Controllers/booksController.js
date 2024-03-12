// @desc: Get all books
// @route: GET /api/books
// @access: public

const asyncHandler = require("express-async-handler");
const Book = require("../Models/booksModel");

const getBooks = async (req, res) => {
    const books = await Book.find();
    res.status(200).json(books);
};

// @desc: Create new book
// @route: POST /api/books
// @access: public

const createBooks = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const {title, author, genre, publicationYear} = req.body;
    if(!title || !author || !genre || !publicationYear) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const book = await Book.create({
        title,
        author,
        genre,
        publicationYear,
    });
    res.status(201).json(book);
});

// @desc: Get new book
// @route: GET /api/books/:id
// @access: public

const getBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if(!book) {
        res.status(404);
        throw new Error("Book not found")
    }
    res.status(200).json(book);
});

// @desc: Update book
// @route: PUT /api/books/:id
// @access: public

const updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if(!book) {
        res.status(404);
        throw new Error("Book not found");   
}
const updatedBook = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
)
res.status(200).json(updatedBook);
});

// @desc: Delete book
// @route: DELETE /api/books/:id
// @access: public

const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(404);
        throw new Error("Book not found");
    }
    await book.deleteOne(); 
    res.status(200).json({ message: "Book removed successfully" });
});



module.exports = { getBooks, createBooks, getBook, updateBook, deleteBook };


