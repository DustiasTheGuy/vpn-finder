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

            findUser(document.userID)
            .then((user) => {
                document["user"] = user;

                Reply.find({parentID: req.params.id}).lean().exec((err, replies) => {
                    queryChildren(replies)
                    .then(repliesWithNested => {
                        document.replies = repliesWithNested;
    
                        Topic.updateOne({_id: document._id}, { views: document.views += 1 }, (err, raw) => {
                            if(err) {
                                return res.json({
                                    message: 'Internal Server Error',
                                    success: false,
                                    statusCode: 200,
                                    data: null
                                });
                            };
            
                            return res.json({
                                message: null,
                                success: true,
                                statusCode: 200,
                                data: document
                            });
                        });
                    });
                });
            })
        };
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

async function queryChildren(array) {
    return new Promise((resolve, reject) => {
        hasChildren(array)
        .then(response => resolve(response))
        .catch(response => queryChildren(response));
    });
};

async function hasChildren(array) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < array.length; i++) {

            findUser(array[i].userID)
            .then((user) => {
                array[i]["user"] = user;
            
                Reply.find({parentID: array[i]._id}).lean().exec((err, documents) => {
                    if(documents.length > 0) {

                        documents
                        .forEach(nested => 
                        findUser(nested.userID)
                        .then((nestedUser) => 
                        nested["user"] = nestedUser));

                        array[i]["replies"] = documents;
                        
                    } else {

                        array[i]["replies"] = [];
                    };
    
                    if(i === array.length - 1) resolve(array);
                });
            });
        };
    });
};