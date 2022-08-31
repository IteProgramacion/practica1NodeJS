const {response, request} = require('express');
const User = require('../models/user.model');
const {googleVerify} = require("../helpers/google-verify");

const userGet = (req, res) => {
    const params = req.query;
    res.json({
        msg: 'get API - controller',
        params
    });
}

const userPost = async (req = request, res = response) => {
    const body = req.body;
    const user = new User(body);
    await user.save();

    res.json({
        msg: 'Post API - controller',
        user
    });
}

const userLogin = async (req = request, res = response) => {
    const response = req.body;
    console.log(response);
    // try {
    //     const googleUser = await googleVerify(id_token);
    //
    //
    // }catch (error) {
    //
    // }
    res.json({
        status: "OK",
        otro: otro,
        response
    });
}

const userPut = (req, res) => {

    const {id} = req.params;

    res.json({
        msg: 'Put API - controller',
        id
    });
}
const userPatch = (req, res) => {
    res.json({
        msg: 'Patch API - controller'
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'Delete API - controller'
    });
}

module.exports = {
    userGet,
    userDelete,
    userPatch,
    userPost,
    userPut,
    userLogin
}