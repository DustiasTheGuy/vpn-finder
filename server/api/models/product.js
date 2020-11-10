const mongoose = require("mongoose");

module.exports = mongoose.model("Product", new mongoose.Schema({
    title: { 
        type: String,
        required: true 
    },
    subtitle: { 
        type: String,
        required: true
    },
    imageURL: { 
        type: String,
        required: true 
    },
    affLink: { 
        type: String,
        required: true 
    },
    properties: { 
        type: Array,
        required: true  
    }
}));