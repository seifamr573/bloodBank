
const User = require("../models/userModel");
const express = require('express');
const app = express();
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);


const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

const userView = (req, res) => {
    res.render("user", {
    });

}

const registerUser = async (req, res) => {
    console.log(req.body)
    let { name, email, city, nationalId, password, role } = req.body
    password = bcrypt.hashSync(password, salt)
    await User.create({
        name, city,
        nationalId
        , password
        , role,
        email


    })
    res.render("login", {
    });

}
module.exports = {
    userView,
    registerUser

};

