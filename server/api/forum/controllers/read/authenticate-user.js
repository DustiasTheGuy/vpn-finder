const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { time } = require('console');
const globalVars = require('../global-vars').globalVars;

module.exports = (req, res) => {
    if(!req.body.email) {
        return res.json({
            message: 'missing field - email',
            success: false,
            statusCode: 200,
            data: null
        });

    } else if(!req.body.password) {
        return res.json({
            message: 'missing field - password',
            success: false,
            statusCode: 200,
            data: null
        });

    } else {
        User.findOne({email: req.body.email.toLowerCase()}, (err, document) => {
            if(err) {
                return res.json({
                    message: "Internal Server Error",
                    success: false,
                    statusCode: 200,
                    data: null
                });

            } else if(!document) {
                return res.json({
                    message: "You've entered invalid information",
                    success: false,
                    statusCode: 200,
                    data: null
                });

            } else {
                bcrypt.compare(req.body.password, document.password)
                .then(validated => {
                    if(!validated) {
                        return res.json({
                            message: "You've entered invalid information",
                            success: false,
                            statusCode: 200,
                            data: null
                        });

                    } else {
                        let privateKey = fs.readFileSync('private.key');

                        jwt.sign({ _id: document._id }, privateKey, { algorithm: 'RS256', expiresIn: '24h' }, (err, token) => {
                            document.loginHistory.push({
                                date: Date.now(),
                                ip: req.connection.remoteAddress    
                            });

                            if(err) {
                                return res.json({
                                    message: "Internal Server Error",
                                    success: false,
                                    statusCode: 200,
                                    data: null
                                });
                            };

                            document.updateOne(document, (err, raw) => {
                                if(err) {
                                    return res.json({
                                        message: "Internal Server Error",
                                        success: false,
                                        statusCode: 200,
                                        data: null
                                    });
                                }

                                globalVars.addUser(document._id);
                                console.log(globalVars.onlineUsers);
                                return res.json({
                                    message: null,
                                    success: true,
                                    statusCode: 200,
                                    data: token
                                });
                            });
                        });
                    };

                }).catch(err => {
                    return res.json({
                        message: "Internal Server Error",
                        success: false,
                        statusCode: 200,
                        data: null
                    });
                });
            };
        });
    };
};


