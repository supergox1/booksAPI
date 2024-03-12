const express = require("express");
const router = express.Router();
const { getBooks, createBooks, getBook, updateBook, deleteBook } = require("../Controllers/booksController");

// Specific routes should be defined before generic ones
router.route("/:id")
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook);

router.route("/")
  .get(getBooks)
  .post(createBooks);

module.exports = router;
