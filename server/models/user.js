const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const userSchema = new Scheme({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

const ModelClass = mongoose.model('user', userSchema);


module.exports = ModelClass;