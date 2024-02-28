const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    }
})

module.exports = mongoose.model('Author', authorSchema)