const Product = require("../models/product");

module.exports = (req, res) => {
    Product.findByIdAndUpdate({_id: req.body._id}, req.body, (err, result) => {
        if(err) {
            res.json({
                message: err,
                statusCode: 200,
                success: false,
                data: null
            });

        } else if(!result) {
            res.json({
                message: "empty result",
                statusCode: 200,
                success: false,
                data: null
            });  

        } else {
            res.json({
                message: "Product has been updated",
                statusCode: 200,
                success: true,
                data: null
            });
        };
    });
};
