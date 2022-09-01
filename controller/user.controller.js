const {response, request} = require('express');
const User = require('../models/user.model');

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

const userNewCreate = async (req = request, res = response) => {
    const response = req.body;
    const user = new User(response);
    await user.save();
    res.json({
        status: "OK",
        response
    });
}

//es una copia fiel del register... ahora tiene que hacer el proceso de iniciar sesion y devolver la informacion del usuario al FrontEnd
const userLogin = async (req = request, res = response) => {
    const {uid} = req.body;
    const user = await User.findAll({
        where:{
            uid: uid,
        }
    });
    res.json({
        status: "OK",
        user: user
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
    userLogin,
    userNewCreate
}