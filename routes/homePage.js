const User = require("../models/userModel");
const express = require('express');
const app = express();
const bcrypt = require("bcryptjs");
const bodyParser= require("body-parser")
var jsonParser = bodyParser.json()
const router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { homeView}= require('../controllers/homeController');

router.get('/',  homeView);

//router.post('/',urlencodedParser,donationSubmission)
module.exports = router;