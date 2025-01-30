const { Timestamp } = require('bson');
const { timeStamp } = require('console');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    number: String,
    role: {
        type: String,
        enum: ['ADMIN', 'HR', 'CANDIDATE'],
        default: 'CANDIDATE',
    },
    profile_picture: String,
    isVerified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },

},
    {
        timestamps: true,
    }
);

const User=mongoose.model('User',userSchema);
module.exports = User;