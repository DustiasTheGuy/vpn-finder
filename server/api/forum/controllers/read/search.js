const Topic = require('../../models/topic');

module.exports = (req, res) => {
    console.log(req.params.search);

    Topic.fuzzySearch(req.params.search)
    .then(result => {
        console.log(result);
        
        return res.json({
            message: null,
            success: true,
            statusCode: 200,
            data: result
        });

    }).catch(err => {
        return res.json({
            message: 'Internal Server Error',
            success: false,
            statusCode: 200,
            data: null
        });
    });
};