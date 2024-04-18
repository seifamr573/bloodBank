const User = require("../models/userModel");
const express = require('express');
const app = express();
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser")
var jwt = require('jsonwebtoken');
const jwtSecret = "hghlgfmh;fmhfmh;dfa;ld;la;z"
let page=""

app.use(bodyParser.urlencoded({ extended: true }))

const logInView =  (req, res) => {
   
    res.render("login", {
    });

}
const LoginValidation= async function(req,res){
    const e = req.body.email

    const p = req.body.password;
    const userDoc = await User.findOne({ email: e }).exec();

    if (userDoc) {
        const pCorrect =bcrypt.compareSync(p, userDoc.password)
        if (pCorrect) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id,
                name: userDoc.name,
                role:userDoc.role
            }, jwtSecret, {

            }, (err, token) => {
                if (err) throw err;
                res.cookie("token", token).json(userDoc);

            });

        }
        else {
            res.json("not correct")

        }
    }
    else {
        res.json("not found")

    }
    
   
     //  res.redirect("/donation")
}
module.exports = {
    LoginValidation, logInView

};