const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add book title"],
    },
    author: {
        type: String,
        required: [true, "Please add name of book author"],
    },
    genre: {
        type: String,
        required: [true, "Include book genre"],
    },
    publicationYear: {
        type: String,
        required: [true, "Kindly add year of publication"],
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Books", booksSchema);