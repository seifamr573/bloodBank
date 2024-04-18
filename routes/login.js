const User = require("../models/userModel");
const express = require('express');
const app = express();
const bcrypt = require("bcryptjs");


const bodyParser= require("body-parser")

var jsonParser = bodyParser.json()
 

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const { logInView,LoginValidation}= require('../controllers/loginController');
const router = express.Router();
router.get('/',  logInView);

router.post('/',urlencodedParser,LoginValidation)
module.exports = router;