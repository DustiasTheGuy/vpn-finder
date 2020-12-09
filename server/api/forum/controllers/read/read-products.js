const Product = require('../../../website/models/product');

module.exports = (req, res) => {
    Product.find({}, (err, documents) => {
        if(err) {
            return res.json({
                message: 'Internal Server Error',
                success: false,
                statusCode: 200,
                data: null
            });

        } else if(!documents) {
            return res.json({
                message: 'Zero documents',
                success: false,
                statusCode: 200,
                data: []
            });

        } else {
            return res.json({
                message: null,
                success: true,
                statusCode: 200,
                data: documents.slice(0, 6)
            });
        }
    })
}