const mongoose = require("mongoose");
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const TopicSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    category: { type: String, required: true },
    body: { type: String, required: true },
    userID: { type: String, required: true },
    created: { type: Date, default: Date.now },
    imageURLs: { type: Array, default: [] },
    repliesLength: { type: Number, default: 0 },
    views: { type: Number, default: 0},
    lastResponse: {
        created: { type: Date, required: false },
        userID: { type: String, required: false }
    }
});

TopicSchema.plugin(mongoose_fuzzy_searching, { 
    fields: ['topic', 'body', 'category']
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;