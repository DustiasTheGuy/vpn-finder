const Product = require("../../models/product");

module.exports = (req, res) => {
    Product.find({}, (err, documents) => { // Query all the products, primarily used on the landing page
        if(err) {
            return res.status(404).json({
                message: err,
                success: false,
                statusCode: 404,
                data: null
            });

        } else if(!documents) {
            return res.status(404).json({
                message: "Zero documents",
                success: false,
                statusCode: 404,
                data: null
            });

        };

        documents.forEach((element, index) => {
            if(element.priority) {
                documents.splice(index, 1);
                documents.unshift(element);
            };
        });
    
        return res.status(200).json({
            message: null,
            success: true,
            statusCode: 200,
            data: documents
        });
    });
};


