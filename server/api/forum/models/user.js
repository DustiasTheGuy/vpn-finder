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
    created: {
        type: Date,
        default: Date.now()
    },
    resetToken: {
        type: String,
        default: null
    }
}));
