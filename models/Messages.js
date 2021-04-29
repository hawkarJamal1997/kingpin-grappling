const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
})

module.exports = mongoose.model('Message', MessageSchema)