const mongoose = require("mongoose");

module.exports = mongoose.model("Message", new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    files: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now()
    }
}));