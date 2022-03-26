const express = require("express");
const { findOne, findById, findOneAndUpdate } = require("../models/user.model");

const User = require("../models/user.model");

const getAllUser = async (req, res, next) =>{
    try {
        const user = await User.find({});
        return res.json({
            user
        });
    } catch (error) {
        return res.json({
            message: error
        });
    }
}

const createUser = async (req, res, next) =>{
    try {
        const user = await User.create(req.body)
        return res.json({
            status: "success",
            data: {user}
        });
        
    } catch (error) {
        return res.json({
            message: error
        });
    }
}

const getUser = async (req, res, next) =>{
    try {
        const user = await User.findById(req.params.id)

        return res.json({
            user
        });
    } catch (error) {
        return res.json({
            message: error
        });
    }

}

const updateUser = async (req, res, next) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);

        return res.json({
            user
        });
    } catch (error) {
        return res.json({
            message: error
        });
    }

}

const deleteUser = async (req, res, next) =>{
    try {
        const user= await User.findByIdAndDelete(req.params.id);
        return res.json({
            user
        });
    } catch (error) {
        return res.json({
            message: error
        });
    }

}

module.exports = { getAllUser, createUser, getUser, updateUser, deleteUser }