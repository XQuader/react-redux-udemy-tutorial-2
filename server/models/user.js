const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Scheme = mongoose.Schema;

const userSchema = new Scheme({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {
    "use strict";

    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        })
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        "use strict";

        if (err) {
            return callback(err);
        }

        callback(null, isMatch);
    })
};

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;