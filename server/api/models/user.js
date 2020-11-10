const mongoose = require("mongoose");

module.exports = mongoose.model("User", new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
}));