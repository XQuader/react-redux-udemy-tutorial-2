module.exports = (app) => {
    "use strict";

    app.get('/', (req, res, next) => {
        res.send(['water', 'phone', 'paper']);
    });
};