const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Interview must have Date']
    },
    start: {
        type: Date,
        required: [true, 'Interview must have Start Time']
    },
    end: {
        type: Date,
        required: [true, 'Interview must have End Time']
    },
    participants: [
        {
            name: {
                type: String,
                required: [true, 'Participant must have name'],
                trim: true
            },
            Email: {
                type: String,
                required: [true, 'Participant must have email'],
                trim: true
            }
        }
    ]
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;