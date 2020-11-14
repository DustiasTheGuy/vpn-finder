const mongoose = require("mongoose");

module.exports = mongoose.model("Product", new mongoose.Schema({
    label: { // the product name
        type: String,
        required: true 
    },
    description: {  // not currently being used but should be a description of the product
        type: String,
        required: true
    },
    imageURL: {  // a path to the logo of the product either in the assets/images/products folder or somewhere else 
        type: String,
        required: true 
    },
    link: {  // the affiliate link
        type: String,
        required: true 
    },
    views: { // How many times has the product been clicked
        type: Number,
        required: false,
        default: 0
    },
    priority: { // Should this product be at the top of the home page?
        type: Boolean,
        default: false  
    },
    freeOption: { // Does this product have a free option?
        type: Boolean,
        required: true
    },
    active: { // Should the product be displayed on the home page?
        type: Boolean,
        default: true
    },
    moneyBack: { // Does this product offer a money back guarantee?
        type: Boolean,
        required: true
    },
    onSaleData: {
        onSale: {
            type: Boolean,
            default: false
        },
        discount: {
            type: Number,
            default: 0
        }
    },
    features: { 
        type: Array,
        required: true  
    }
}));