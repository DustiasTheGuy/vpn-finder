const Product = require("../models/product");

module.exports = (req, res) => {
    Product.findOne({_id: req.params.id}, (err, document) => {
        if(err) {
            console.log(err)
            return res.status(200).json({
                message: err,
                success: false,
                statusCode: 200,
                data: null
            });

        } else {
            document.views++;
            
            document.save(err => {
                if(err) {
                    return res.status(200).json({
                        message: err,
                        success: false,
                        statusCode: 200,
                        data: null
                    });
                };

                return res.status(201).json({
                    message: null,
                    success: true,
                    statusCode: 201,
                    data: null
                });
            });
        };
    });
};