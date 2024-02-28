const mongoose = require('mongoose')

const publisherSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    }
})

module.exports = mongoose.model('Publisher', publisherSchema)