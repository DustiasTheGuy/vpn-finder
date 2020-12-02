const mongoose = require("mongoose");

module.exports = mongoose.model("Reply", new mongoose.Schema({
    reply: { type: String, required: true },
    created: { type: Date, default: Date.now },
    parentID: { type: String, required: true },
    user: { 
        imageURL: { type: String, required: true },
        email: { type: String, required: true }
    }
}));
