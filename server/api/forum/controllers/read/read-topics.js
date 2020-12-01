const Topic = require('../../models/topic');

module.exports = (req, res) => {
    Topic.find({}, (err, documents) => {
        if(err || !documents) {
            return res.json({
                message: "Internal Server Error",
                success: false,
                statusCode: 200,
                data: []
            });
        } 

        return res.json({
            message: null,
            success: true,
            statusCode: 200,
            data: documents
        });
    });
}