
const User = require("../models/userModel");
const express = require('express');
const app = express();
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);


const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

const homeView = (req, res) => {
    res.render("homePage", {
    });

}



module.exports = {
   homeView

};

