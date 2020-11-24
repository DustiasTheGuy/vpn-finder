const Message = require("../../models/message");

module.exports = (req, res) => {
    Message.find({}, (err, documents) => {
        if(err) {
            return res.json({
                message: err,
                success: false,
                statusCode: 200,
                data: null
            });

        } else if(!documents) {
            return res.json({
                message: "zero docs",
                success: false,
                statusCode: 200,
                data: []
            });   

        } else {
            documents.forEach(doc => {
                doc.files.forEach(file => {
                    file.data = null;
                });
            });

            return res.json({
                message: null,
                success: true,
                statusCode: 200,
                data: documents
            });
        };
    });
};