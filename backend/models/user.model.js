const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User must have name']
    },
    Email: {
        type: String,
        required: [true, 'User must have Email']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;