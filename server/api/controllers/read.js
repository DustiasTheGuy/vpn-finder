const Product = require("../models/product");

module.exports = (req, res) => {
    Product.find({}, (err, documents) => {
        if(err) {
            return res.status(404).json({
                message: err,
                success: false,
                statusCode: 404,
                data: null
            })
        } else if(!documents) {
            return res.status(404).json({
                message: "Zero documents",
                success: false,
                statusCode: 404,
                data: null
            })
        }

        return res.status(200).json({
            message: null,
            success: false,
            statusCode: 200,
            data: documents
        })
    })
};