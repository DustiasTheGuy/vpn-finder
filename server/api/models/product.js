const mongoose = require("mongoose");

module.exports = mongoose.model("Product", new mongoose.Schema({
    label: { 
        type: String,
        required: true 
    },
    description: { 
        type: String,
        required: true
    },
    imageURL: { 
        type: String,
        required: true 
    },
    link: { 
        type: String,
        required: true 
    },
    freeOption: {
        type: Boolean,
        required: true
    },
    features: { 
        type: Array,
        required: true  
    }
}));