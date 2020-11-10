const Product = require("../models/product");

module.exports = (req, res) => {
    if(!req.body.features || req.body.features.length === 0) {
        return res.status(404).json({
            message: "You forgot to add some properties",
            success: false,
            statusCode: 404,
            data: null
        });

    } else if(!req.body.description) {
        return res.status(404).json({
            message: "You forgot to add a subtitle",
            success: false,
            statusCode: 404,
            data: null
        })

    } else if(!req.body.imageURL) {
        return res.status(404).json({
            message: "You forgot to add an image url",
            success: false,
            statusCode: 404,
            data: null
        })

    } else if(!req.body.link) {
        return res.status(404).json({
            message: "You forgot to add an affiliate link",
            success: false,
            statusCode: 404,
            data: null
        })

    } else if(!req.body.label) {
        return res.status(404).json({
            message: "You forgot to add a title",
            success: false,
            statusCode: 404,
            data: null
        })
    } 

    let product = new Product({
        label: req.body.label,
        description: req.body.description,
        imageURL: req.body.imageURL,
        link: req.body.link,
        features: req.body.features
    });
    
    product.save(err => {
        if(err) {
            return res.status(404).json({
                message: err,
                success: false,
                statusCode: 404,
                data: null
            });
        };

        return res.status(200).json({
            message: "Your product has been saved",
            success: true,
            statusCode: 200,
            data: product
        });
    });
};

