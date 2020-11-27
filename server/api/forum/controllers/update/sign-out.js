const globalVars = require('../global-vars').globalVars;

module.exports = (req, res) => {
    globalVars.removeUser(req.auth);
        
    res.json({
        message: null,
        success: true,
        statusCode: 200,
        data: null
    });
};
