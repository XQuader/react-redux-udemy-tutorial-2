const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = Date.now();
    return jwt.encode({
        sub: user.id,
        iat: timestamp
    }, config.secret);
}

exports.signup = ({body: {email, password}}, res, next) => {
    User.findOne({email}, (err, existingUser) => {
        "use strict";

        if (existingUser) {
            return res.status(422).send({error: 'Email is in use'});
        }

        const user = new User({email, password});

        user.save((err) => {
            if (err) {
                res.status(401).send({error: 'Bad request'});
                return next(err);
            }

            res.json({token: tokenForUser(user)});
        });
    });
};