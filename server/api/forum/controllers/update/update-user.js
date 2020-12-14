const User = require('../../models/user');

module.exports = (req, res) => {
    User.findOneAndUpdate({_id: req.auth}, req.body, (err, user) => {
        if(err) {
            return res.json({
                message: 'Internal Server Error',
                success: false,
                statusCode: 200,
                data: null
            });

        } else if(!user) {
            return res.json({
                message: 'Session Expired',
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
        }
    });
}