const mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

// Salt used for bcrypt encryption
const saltRounds = 12;

// Users' Mongoose Model
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true,
        minlength: 2,
        maxlength: 16,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    }
});

// Hash password before saving
userSchema.pre('save', next => {
    var user = this;

    // If not registration
    if(!user.isModified('password')) return next();

    bcrypt.hash(user.password, saltRounds, (err, hash) => {
        if(err) return next(err);

        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', userSchema);