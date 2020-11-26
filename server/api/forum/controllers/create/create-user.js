const User = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    if(!req.body.email) {
        return res.json({
            message: 'missing field - email',
            success: false,
            statusCode: 200,
            data: null
        });

    } else if(!validateEmail(req.body.email.toLowerCase())) {
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

    } else if(!req.body.confirm) {
        return res.json({
            message: 'missing field - password',
            success: false,
            statusCode: 200,
            data: null
        });

    } else if(req.body.password != req.body.confirm) {
        return res.json({
            message: 'missing field',
            success: false,
            statusCode: 200,
            data: null
        });

    } else {
        req.body.email = req.body.email.toLowerCase(); // all emails should be in lowercase

        User.findOne({email: req.body.email}, (err, document) => {
            if(err) {
                return res.json({
                    message: 'Internal Server Error - Finding User',
                    success: false,
                    statusCode: 200,
                    data: null
                });

            } else if(document != null) {
                return res.json({
                    message: 'Duplication error',
                    success: false,
                    statusCode: 200,
                    data: null
                });

            } else {
                bcrypt.hash(req.body.password, 10)
                .then(hash => {

                    new User({
                        email: req.body.email,
                        password: hash
                    }).save(err => {
                        if(err) {
                            return res.json({
                                message: 'Internal Server Error - Saving User',
                                success: false,
                                statusCode: 200,
                                data: null
                            });

                        } else {
                            return res.json({
                                message: null,
                                success: true,
                                statusCode: 200,
                                data: null
                            });
                        };
                    });

                }).catch(err => {
                    return res.json({
                        message: 'Internal Server Error - Creating User',
                        success: false,
                        statusCode: 200,
                        data: null
                    });
                });
            };
        });
    };
}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
