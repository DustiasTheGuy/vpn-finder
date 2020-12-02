const Topic = require('../../models/topic');
const Reply = require('../../models/reply');
const User = require('../../models/user');
const { response } = require('express');

module.exports = (req, res) => {
    Topic.findOne({_id: req.params.id}).lean().exec((err, document) => {
        if(err) {
            return res.json({
                message: 'Internal Server Error',
                success: false,
                statusCode: 200,
                data: null
            });

        } else {
            delete document["category_fuzzy"];
            delete document["topic_fuzzy"];
            delete document["body_fuzzy"];

            let promises = [
                findUser(document.userID),
                findReplies(req.params.id),
                addView(document)
            ];

            Promise.all(promises)
            .then(values => {
                document["user"] = values[0];
                fetchNestedReplies(values[1])
                .then(response => {
                    document["replies"] = response;
                    return res.json({
                        message: null,
                        success: true,
                        statusCode: 200,
                        data: document
                    });
                })
            });
        };
    });
};

async function fetchNestedReplies(array) {
    let promises = [];

    return new Promise((resolve, reject) => {
        array.forEach(element => promises.push(findReplies(element._id)));

        Promise.all(promises).then(result => {
            array.forEach((element, index) => element.replies = result[index]);

            return resolve(array);
        });
    });
};

async function findReplies(parentID) {
    return new Promise((resolve, reject) => {
        Reply.find({parentID: parentID}).lean().exec((err, replies) => {
            if(err) return reject(err);
            if(!replies) return resolve(null);

            return resolve(replies);
        });
    });
};

async function addView(document) {
    return new Promise((resolve, reject) => {
        Topic.updateOne({_id: document._id}, { views: document.views += 1 }, (err, raw) => {
            if(err) return reject(false);

            return resolve(true);
        });
    });
};

async function findUser(id) {
    return new Promise((resolve, reject) => {
        User.findOne({_id: id}).lean().exec((err, document) => {
            if(err) return reject(err);
            if(!document) return reject(new Error("No user witht that id"));

            delete document["password"];
            delete document["resetToken"];
            delete document["created"];

            return resolve(document);
        });
    });
};
