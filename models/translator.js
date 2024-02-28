const mongoose = require('mongoose')

const translatorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    }
})

module.exports = mongoose.model('Translator', translatorSchema)