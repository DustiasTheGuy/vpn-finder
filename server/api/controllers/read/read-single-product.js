const Product = require("../../models/product");

module.exports = (req, res) => {  // Query a single product, primarily used when sending a user to a link
    Product.findOne({_id: req.params.id}, (err, document) => {
        if(err) {
            return res.status(200).json({
                message: "You passed an invalid id",
                status: 200,
                success: false,
                data: null
            });

        } else if(!document) {
            return res.status(200).json({
                message: "You passed an invalid id",
                status: 200,
                success: false,
                data: null
            });    

        } else {
            return res.status(200).json({
                message: null,
                status: 200,
                success: true,
                data: document
            });
        };
    });
};