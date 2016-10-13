var mongoose = require('mongoose');
var User = require('./User.model.js');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    published: {
        type: Date,
        default: Date.now
    },
    // _author:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // },
    _author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    burmeseTitle: {
        type: String,
        required: true
    },
    postImageUrl: {
        type: String,
        required: true
    },
    totalLikes: Number,
    iLike: Boolean,
    engContent: {
        type: String,
        required: true
    },
    burmeseContent: {
        type: String,
        required: true
    }
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;