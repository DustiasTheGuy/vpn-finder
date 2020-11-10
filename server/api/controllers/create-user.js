const User = require("../models/user");

module.exports = (req, res) => {

    if(!req.body.email) {
        return res.status(200).json({
            message: "You forgot to enter an email",
            success: false,
            statusCode: 200,
            data: null
        })
    }

    User.findOne({email: req.body.email}, (err, document) => { // prevent duplication
        if(err) {
            return res.status(200).json({
                message: err,
                success: false,
                statusCode: 200,
                data: null
            })

        } else if(document) {
            return res.status(200).json({
                message: "Your name is already on the email list",
                success: false,
                statusCode: 200,
                data: null
            })

        } else if(!document) {
            new User({
                email: req.body.email
            }).save(err => {

                if(err) {
                    return res.status(200).json({
                        message: err,
                        success: false,
                        statusCode: 200,
                        data: null
                    })    
                }
        
                return res.status(201).json({
                    message: "You're done!",
                    success: true,
                    statusCode: 201,
                    data: req.body.email
                })
            })
        }
    })
}