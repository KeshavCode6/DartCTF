// dependencies
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs');
const User = require('./user')
const Level = require('./level')

// connecting to mongodb
mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.ffmynhi.mongodb.net/CTF?retryWrites=true&w=majority`).then(()=>{console.log("Connected to mongodb");}).catch((error) => {console.error(error)});

// middle ware
const auth = require('./auth.js')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session')

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build/')));
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())

// routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "home.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "home.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "about.html"));
});

app.get("/contact", (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "contact.html"));
})

app.get("/play", auth.isLoggedIn, (req, res)=>{
    const user = new User({
        id: req.user.id,
        username:`${req.user.name.givenName} ${req.user.name.familyName}`,
        points:0
    });  
    user.save();     
    res.sendFile(path.join(__dirname, "../build", "play.html"));
})

app.get("/codeEditor", (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challengeTemplate.html"));
})

app.get("/cryptography/c1",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/crypto/c1.html"));
})
app.get("/cryptography/c2",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/crypto/c2.html"));
})
app.get("/cryptography/c3",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/crypto/c3.html"));
})
app.get("/cryptography/c4",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/crypto/c4.html"));
})

app.get("/steganography/c1",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/steg/c1.html"));
})
app.get("/steganography/c2",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/steg/c2.html"));
})
app.get("/steganography/c3",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/steg/c3.html"));
})
app.get("/steganography/c4",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/steg/c4.html"));
})

app.get("/web/c1",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/web/c1.html"));
})
app.get("/web/c2",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/web/c2.html"));
})
app.get("/web/c3",  auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/web/c3.html"));
})

//enter flag
app.post("/enterFlag", auth.isLoggedIn, (req, res)=>{
    Level.findOne({url:req.body.url}).then((level)=>{
        if(level){
            User.find({id:req.user.id}).then((usr)=>{
                if(usr){

                    if(usr[0]["solvedChallenges"].includes(req.body.url)){
                        res.json({msg:"You did this challenge already!"})
                        return;
                    }
                    if(req.body.flag==level.flag){
                        User.findOneAndUpdate(
                            { id: req.user.id },
                            { $inc: { points: level.points }, $push: { solvedChallenges: req.body.url } },
                            { new: true }
                        ).then((error, success)=>{
                            if (error) {
                                console.log(error);
                            } else {
                                console.log(success);
                            }  
                        });
                        res.json({msg:"Bullsye! You got it! Click the play button to go back to the home page"})
                    }
                    else{
                        res.json({msg:"Incorrect, try again!"})
                    }
                }
            });

        }  
    })
})

app.get('/getLoginInfo', auth.isLoggedIn, (req, res) =>{
    User.findOne({ id:req.user.id}).then((user) => {
        var points = 0;
        if (user) {
            points = user["points"];
        }
        res.json({"username":req.user.name, "picture":req.user.picture, "points":points})
    });    
})

app.get('/getSolvedChallenges', auth.isLoggedIn, (req, res) =>{
    User.findOne({ id:req.user.id}).then((user) => {
        if (user) {

            res.json({challenges:user.solvedChallenges})
        }

    });    
})
// google auth
app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get('/auth/loggedIn', (req, res)=>{
    req.user? res.json({"loggedIn":true}):res.json({"loggedIn":false });
});

app.get('/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/play',
        failureRedirect: '/home'
}));

app.use('/auth/logout', (req, res)=>{
    req.session.destroy();
    res.redirect("/home")
})

// running app
app.listen(PORT, "0.0.0.0", () => {
    console.log(`App running on port ${PORT}`);
});


// var createLevels = ()=>{
//     // new Level({url:"/cryptography/c1", flag:"d3cod3z777", points:"100"}).save();
//     // new Level({url:"/cryptography/c2", flag:"c3453rC1ph3r4th3duB83346", points:"200"}).save();
//     // new Level({url:"/cryptography/c3", flag:"Qpr25z6TVaLjO4bGgQdy", points:"300"}).save();
//     // new Level({url:"/cryptography/c4", flag:"christmas is you baby", points:"400"}).save();
//     // new Level({url:"/steganography/c1", flag:"nowYouSeeMe", points:"500"}).save();
//     // new Level({url:"/steganography/c2", flag:"FdzK2emXyS0nYemUXqSS", points:"600"}).save();
//     // new Level({url:"/steganography/c3", flag:"blackLivesMatter!!", points:"700"}).save();
//     // new Level({url:"/steganography/c4", flag:"milkjugs15", points:"800"}).save();
//     // new Level({url:"/web/c1", flag:"OMjhs65CRlWJeIFY6w1", points:"900"}).save();
//     //new Level({url:"/web/c2", flag:"skibi", points:"1000"}).save();
//     // new Level({url:"/web/c3", flag:"yes", points:"12000"}).save();
// }

// //createLevels();