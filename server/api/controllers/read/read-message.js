const Message = require("../../models/message");
const shared = require("../shared");

module.exports = (req, res) => {
    Message.findOne({_id: req.params.id}, (err, document) => {
        if(err) {
            return res.json({
                message: "An error occured",
                success: false,
                statusCode: 200,
                data: null
            });

        } else if(!document) {
            return res.json({
                message: "Zero documents found",
                success: false,
                statusCode: 200,
                data: null
            });

        } else {
            
            if(document.files.length > 0) {
                let promises = [];
                document.files.forEach(file => {
                    file["data"] = file.data.buffer;
                    promises.push(shared.createFile(file, req.headers.host));
                });

                Promise.all(promises).then(response => {
                    document["files"] = response.map(r => r.data);

                    res.json({
                        message: "Files will be removed after 20 minutes",
                        success: true,
                        statusCode: 200,
                        data: document
                    });
                });

            } else {
                res.json({
                    message: null,
                    success: true,
                    statusCode: 200,
                    data: document
                });  

            };
        };
    });
};