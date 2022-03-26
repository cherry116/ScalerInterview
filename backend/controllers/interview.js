const express = require("express");
const { findOne, findById, findOneAndUpdate } = require("../models/interview.model");

const Interview = require("../models/interview.model");

const getAllInterview = async (req, res, next) => {
    try {
        const interview = await Interview.find({});

        return res.status(200).json({
            interview
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }   
}

const createInterview = async (req, res, next) =>{
    try{
        console.log("Creating inertview");
        const interview = await Interview.create(req.body);

        return res.status(201).json({
            status: "success",
            data: {
                interview
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }

}

const getInterview = async (req, res, next) =>{
    try {
        const interview = await Interview.findById(req.params.id)

        return res.status(200).json({
            interview
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }

}

const updateInterview = async (req, res, next) =>{
    try {
        const interview = await Interview.findByIdAndUpdate(req.params.id, req.body);

        return res.status(201).json({
            interview
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }

}

const deleteInterview = async (req, res, next) =>{
    try {
        const interview= await Interview.findByIdAndDelete(req.params.id);
        return res.status(204).json({
            interview
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }

}

module.exports = { getAllInterview, createInterview, getInterview, updateInterview, deleteInterview }