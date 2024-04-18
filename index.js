const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const userRoute=require("./routes/user")
const loginRoute=require("./routes/login")
const donationRoute=require("./routes/donate")
const adminRoute=require("./routes/admin")
const homeRoute=require("./routes/homePage")
app.use(express.static(__dirname + '/views'));
var jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const url=process.env.MONGO_URL;
//MONGO_URL="mongodb+srv://seifeldeenamr:NJksj9sG6fjiJBwN@bookingapp.lba7cif.mongodb.net/?retryWrites=true&w=majority&appName=bookingApp"


mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('data base is connected'))
.catch(err => console.log(err));

app.set('view engine', 'ejs');


//Routes
app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/donation', donationRoute);
app.use('/admin', adminRoute);
app.use('/', homeRoute);

app.listen(PORT, console.log("server is runing on port " + PORT))