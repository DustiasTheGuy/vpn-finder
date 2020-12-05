const Topic = require('../../models/topic');

module.exports = (req, res) => {
    if(!req.body.topic) {
        return res.json({
            message: 'You forgot to enter a topic',
            success: false,
            statusCode: 200,
            data: null
        });

    } else if(!req.body.category) {
        return res.json({
            message: 'You forgot to pick a category',
            success: false,
            statusCode: 200,
            data: null
        });

    } else if(!req.body.body) {
        return res.json({
            message: 'You forgot to enter a body',
            success: false,
            statusCode: 200,
            data: null
        });

    } else {
        new Topic({
            topic: req.body.topic,
            category: req.body.category,
            body: req.body.body,
            userID: req.auth, // applied by middleware
            imageURLs: req.body.images || []
        }).save(err => {
            if(err) {
                console.log(err);
                return res.json({
                    message: 'An error occured while saving document',
                    success: false,
                    statusCode: 200,
                    data: null
                });
            };

            return res.json({
                message: 'Your topic has been created',
                success: true,
                statusCode: 200,
                data: null
            });
        });
    };
};

/* 
    topic
    category
    created
    lastResponse
    body
*/