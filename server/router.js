const Authentication = require('./controllers/authentication');

module.exports = (app) => {
    "use strict";

    app.post('/signup', Authentication.signup);
};