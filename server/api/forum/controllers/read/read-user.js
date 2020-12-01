const User = require('../../models/user');
const Topic = require('../../models/topic');
const globalVars = require('../global-vars').globalVars;

module.exports = (req, res) => {
    if(!req.auth) {
        return res.json({
            message: 'You are not authorized',
            success: false,
            statusCode: 200,
            data: null
        });

    } else if(!globalVars.isOnline(req.auth)) {
        return res.json({
            message: 'You are not authorized',
            success: false,
            statusCode: 200,
            data: null
        });

    } else {
        User.findOne({_id: req.auth}).lean().exec((err, document) => {
            if(err) {
                return res.json({
                    message: 'Internal Server Error',
                    success: false,
                    statusCode: 200,
                    data: null
                });
    
            } else if(!document) {
                return res.json({
                    message: 'Internal Server Error',
                    success: false,
                    statusCode: 200,
                    data: null
                });
    
            } else {
                delete document["password"];

                Topic.find({userID: req.auth}, (err, documents) => {
                    document["topics"] = documents;
                    
                    if(err || !documents) {
                        return res.json({
                            message: null,
                            success: true,
                            statusCode: 200,
                            data: document
                        });
                    };

                    return res.json({
                        message: null,
                        success: true,
                        statusCode: 200,
                        data: document
                    });
                });
            };
        });
    };
};