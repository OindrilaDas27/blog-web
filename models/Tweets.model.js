const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tweetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    imgUrl: {
        type: String,
        default: null
    }
});

tweetSchema.set('timestamps', true)

module.exports = mongoose.model('Tweets', tweetSchema)
