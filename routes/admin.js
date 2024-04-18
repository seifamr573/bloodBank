
const express = require('express');
const app = express();
const bcrypt = require("bcryptjs");
const bodyParser= require("body-parser")
var jsonParser = bodyParser.json()
const router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { adminView,modifyResult}= require('../controllers/adminController');

router.get('/',   adminView);

router.post('/',urlencodedParser,modifyResult)
module.exports = router;
