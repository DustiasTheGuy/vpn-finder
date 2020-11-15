const Product = require("../models/product");

module.exports = (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deleted) => {
        if(err) {
            return res.json({
                message: err,
                success: false,
                statusCode: 200,
                data: null
            });
        } else {
            return res.json({
                message: "Your request was proccesed",
                success: true,
                statusCode: 200,
                data: deleted
            });
        };
    })
};