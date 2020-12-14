const mongoose = require("mongoose");

module.exports = mongoose.model("User", new mongoose.Schema({
    email: { 
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        default: 'default.png'
    },
    loginHistory: {
        type: Array,
        default: []
    },
    created: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    dateOfBirth: {
        year: { type: Number, default: 1900 },
        month: { type: Number, default: 1 },
        day: { type: Number, default: 1 }
    },
    countryOfResidence: {
        type: String,
        default: null
    },
    resetToken: {
        type: String,
        default: null
    }
}));
