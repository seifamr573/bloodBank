const BloodStorage = require("../models/bloodStorage");
const express = require('express');
const app = express();
const bodyParser = require("body-parser")
var jwt = require('jsonwebtoken');
const jwtSecret = "hghlgfmh;fmhfmh;dfa;ld;la;z"
const cookieParser = require('cookie-parser');


// cookieParser middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))

const donateView = function (req, res) {

    res.render("donationForm", {
    })

}


const donationSubmission = async function (req, res) {
    
    const { token } = req.cookies
    const { bloodGroup, LastDonationDate, chronicDiseases } = req.body
    
  let donar=null
    const quantity = 0.5
    new Promise((resolve, reject) => {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            donar = userData.id
            

    
            resolve(userData);
        });
    });
    await BloodStorage.create({
        bloodGroup,
        LastDonationDate,
        chronicDiseases,
        donar,
        quantity


    })
    res.redirect("/")

}
module.exports = {
    donateView, donationSubmission

};