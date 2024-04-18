const User = require("../models/userModel");
const express = require('express');
const app = express();
const bcrypt = require("bcryptjs");
const bodyParser= require("body-parser")
var jsonParser = bodyParser.json()
const router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { donateView,donationSubmission}= require('../controllers/donateController');

router.get('/',  donateView);

router.post('/',urlencodedParser,donationSubmission)
module.exports = router;

