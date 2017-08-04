const mongoose = require('mongoose');
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

const ModelClass = mongoose.model('user', userSchema);


module.exports = ModelClass;