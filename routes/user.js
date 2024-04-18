const User = require("../models/userModel");
const express = require('express');
const app = express();
const bcrypt = require("bcryptjs");


const bodyParser= require("body-parser")

var jsonParser = bodyParser.json()
 

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const {userView ,registerUser}= require('../controllers/userController');
const router = express.Router();
router.get('/', userView);

router.post('/',urlencodedParser,registerUser)


module.exports = router;