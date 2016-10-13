var mongoose = require('mongoose');
var Post = require('./Post.model.js');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    adminImageUrl: {
        type: String,
        required: true
    },
    role : {
        type: String,
        required: true
    },
    bio : {
        type: String,
        required: true
    },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post',
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;