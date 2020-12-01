const Topic = require('../../models/topic');
const Reply = require('../../models/reply');
module.exports = (req, res) => {
    if(!req.body.reply) {
        return res.json({
            message: "",
            success: false,
            statusCode: 200,
            data: null
        });

    } else if(!req.auth) {
        return res.json({
            message: "",
            success: false,
            statusCode: 200,
            data: null
        });

    } else {
        
        addReply({
            parentID: req.body.parentID,
            topicID: req.body.topicID,
            reply: req.body.reply,
            auth: req.auth
        }).then(document => {
            Topic.updateOne({_id: document._id}, { 
                repliesLength: document.repliesLength += 1,
            }, (err, raw) => {
                console.log(err);
                if(err) {
                    console.log(err);
                    return res.json({
                        message: "",
                        success: false,
                        statusCode: 200,
                        data: null
                    });
                };
    
                return res.json({
                    message: null,
                    success: true,
                    statusCode: 200,
                    data: null
                });
            });    

        }).catch(err => {
            console.log(err);
            return res.json({
                message: "",
                success: false,
                statusCode: 200,
                data: null
            });
        });
    };
};


async function addReply(data) {
    return new Promise((resolve, reject) => {
        Topic.findOne({_id: data.topicID})
        .lean().exec((err, document) => {

            if(err) reject(err);
    
            new Reply({
                reply: data.reply,
                parentID: data.parentID,
                userID: data.auth,
            }).save(err => {
                if(err) reject(err);

                resolve(document);
            });
        });
    });
};

/*

Reply {
    replies: [
        Reply: {},
        Reply: {},
        Reply: {
            replies: [

            ]
        }
    ]
}


{
    nested: {
        isNested: true,
        nestedID: 1925u125
    }
}

    const ReplySchema = new mongoose.Schema({
        reply: { type: String, required: true },
        created: { type: Date, default: Date.now() },
        topicID: { type: String, required: true },
        userID: { type: String, required: true },
        replies: { type: Array, default: [] }
    });
*/