const mongoose = require("mongoose");

module.exports = mongoose.model("User", new mongoose.Schema({
    email: { 
        type: String, 
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        default: 'default.png'
    },
    created: {
        type: Date,
        default: Date.now
    },
    resetToken: {
        type: String,
        default: null
    }
}));
