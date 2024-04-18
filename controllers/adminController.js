const BloodStorage = require("../models/bloodStorage");
const express = require('express');
const app = express();
const bodyParser = require("body-parser")
var jwt = require('jsonwebtoken');
const jwtSecret = "hghlgfmh;fmhfmh;dfa;ld;la;z"
const cookieParser = require('cookie-parser');
const bloodStorage = require("../models/bloodStorage");
const User = require("../models/userModel");
const nodemailer = require("nodemailer")

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))


const adminView = async function (req, res) {
    const arr = await BloodStorage.find()

    const { token } = req.cookies
    var role = ""
    new Promise((resolve, reject) => {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            role = userData.role



            resolve(userData);
        });
    });
    console.log(role)
    if (role === "admin") {
        res.render("adminPage", {
            ListItems:

                arr
        })
    }
    else {
        res.json("not authorized")
    }

}

const modifyResult = async function (req, res) {
    const { user_id, test, _id } = req.body
    await User.findByIdAndUpdate(user_id, { test })



    console.log(user_id)
    const to = await User.find({ _id: user_id })
    console.log(to[0].email)

    if (test === "postive") {
        var transporter = nodemailer.createTransport({
            service: 'gmail',

            auth: {
                user: 'seifcourses98@gmail.com',
                pass: 'itin tkzh ouqs ilhn'
            }
        });

        var mailOptions = {
            from: 'seifcourses98@gmail.com',
            to: to[0].email,
            subject: 'the egyptian blood bank',
            text: 'dear mr/ms your blood test results is postive '
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        await bloodStorage.findOneAndDelete({ _id }).exec()
      

    }
    await bloodStorage.findByIdAndUpdate(_id, { testDone: "ok" })

    res.redirect("/admin")




}

module.exports = {
    adminView, modifyResult

};
