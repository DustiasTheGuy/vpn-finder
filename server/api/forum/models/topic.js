const mongoose = require("mongoose");

module.exports = mongoose.model("Topic", new mongoose.Schema({
    topic: { 
        type: String, 
        required: true 
    },
    category: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    lastResponse: {
        type: Date,
        required: false
    },
    body: {
        type: String,
        required: true
    }
}));
