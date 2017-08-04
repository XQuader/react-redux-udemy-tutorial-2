const User = require('../models/user');

exports.signup = ({body: {email, password}}, res, next) => {
    User.findOne({email}, (err, existingUser) => {
        "use strict";

        if (existingUser) {
            return res.status(422).send({error: 'Email is in use'});
        }

        try{
            const user = new User({email, password});

            user.save((err) => {
                if (err) {
                    res.status(401).send({error: 'Bad request'});
                    return next(err);
                }

                res.json({success: true});
            });
        } catch (err) {

        }
    });
};