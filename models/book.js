const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher',
        required: true
    },
    descripton: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    coverType: {
        type: String,
    },
    pageNumber: {
        type: Number
    },
    author: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
            required: true
        }
    ],
    translator: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Translator',
            required: true
        }
    ],
    comment: [
        {
            type: String
        }
    ],
    score: {
        type: Number
    },
    imageUrl: {
        type: String,
    },
    bookUrl: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number
    },
    weight: {
        type: Number
    },
    length: {
        type: Number,
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    }
})

module.exports = mongoose.model('Book', bookSchema)