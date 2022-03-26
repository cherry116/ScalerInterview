const express = require("express");
const Interview = require("../models/interview.model");

const minimumParticipants = (req, res, next) => {
    try {
        console.log(req.body);
        const { participants } = req.body;
        if(participants.length < 2) {
            return res.status(400).json({
                status: "failed",
                message: "Atleast 2 participants required"
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: "error",
            error: error
        });
    }  
    next();
}

const checkOverlappingInterviews = async (req, res, next) => {
    const { date, start, end, participants } = req.body;

    try {
        console.log("overlap");
        const commonInterviews = await Interview.find({
            $and: [
                { end: {$gte: start } },
                { start: {$lte: end } },
            ],
        });

        let commonParticipants = [];
        let flag = false;

        commonInterviews.forEach((i) => {
            i.participants.forEach((j) => {
                commonParticipants.push(j);
            });
        });

        await participants.forEach((o1) => {
            commonParticipants.forEach((o2) => {
                if(o1._id == o2._id) flag=true;
            });
        });

        if(flag) {
            return res.status(400).json({
                status: 'failed',
                message: 'Participants preoccupied with other interviews'
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: "error",
            error: error
        });
    }
    next();
}

module.exports = { checkOverlappingInterviews, minimumParticipants };