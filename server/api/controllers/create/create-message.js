const Message = require("../../models/message");
const shared = require("../shared");

module.exports = (req, res) => {
    req.body = JSON.parse(req.body.data);
    
    if(req.files != null) {
        req.body.files = [];
        if(!req.files.Files.length > 0) req.files.Files = [req.files.Files];
        
    
        req.files.Files.forEach(file => {
            req.body.files.push({
                name: `${file.md5}.${shared.ext(file.mimetype)}`,
                data: file.data,
                size: file.size,
            });
        });
    };


    
    if(!req.body.email) {
        return res.json({
            success: false,
            message: "Invalid Email",
            statusCode: 200,
            data: null
        });

    } else if(!req.body.name) {
        return res.json({
            success: false,
            message: "Invalid Name",
            statusCode: 200,
            data: null
        });

    } else if(!req.body.message) {
        return res.json({
            success: false,
            message: "Invalid Message",
            statusCode: 200,
            data: null
        });

    } else {
        new Message(req.body)
        .save(err => {
            if(err) {
                return res.json({
                    success: false,
                    message: "An error occured",
                    statusCode: 200,
                    data: null
                });
            };

            return res.json({
                success: true,
                message: "Your message has been sent",
                statusCode: 200,
                data: null
            });
        });
    };
    
}

