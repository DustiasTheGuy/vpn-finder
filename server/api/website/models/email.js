const mongoose = require("mongoose");

module.exports = mongoose.model("Email", new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
}));