// dependencies
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const PORT = process.env.PORT;
const express = require('express');
const app = express();

// mongodb
const mongoose = require('mongoose');
const User = require('./user')
const Level = require('./level')

const challenges = {
    "cryptography": 4,
    "steganography": 4,
    "web": 4,
    "programming":4
};

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
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
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

app.get("/challengeSelect/crypto", auth.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, "../build", `challenges/crypto/select.html`));
});
app.get("/challengeSelect/steg",  auth.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, "../build", `challenges/steg/select.html`));
});
app.get("/challengeSelect/web",  auth.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, "../build", `challenges/web/select.html`));
});
app.get("/challengeSelect/programming",  auth.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, "../build", `challenges/programming/select.html`));
});

app.get("/dashboard", auth.isLoggedIn, (req, res)=>{

    const username = `${req.user.name.givenName.charAt(0).toLowerCase()}${req.user.name.familyName.charAt(0).toLowerCase()}.${Math.round(Math.random() * 999999)}`;

    User.findOne({id:req.user.id}).then((usr)=>{
        if (!usr)
        {
            const user = new User({
                id: req.user.id,
                username: username,
                display: `${req.user.name.givenName} ${req.user.name.familyName}`,
                points:0
            });  
            user.save();     
        }
    });

    res.sendFile(path.join(__dirname, "../build", "dashboard.html"));
})


for (const challengeType in challenges) {
    for (let i = 1; i <= challenges[challengeType]; i++) {
        const route = `/challengeSelect/${challengeType}/c${i}`;
        app.get(route, (req, res) => {
            res.sendFile(path.join(__dirname, "../build", `challenges/${challengeType}/c${i}.html`));
        });
    }
}
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

app.get("/getLeaderboard", (req, res)=>{
    var userData = {}
    User.find().sort({ points: -1 }).limit(100).exec().then((users) => {
        users.forEach(user => {
            userData[user["username"]] = [user["display"], user["points"]];
        });
        res.json(userData)
    }).catch(error => {
        console.error("Error retrieving leaderboard:", error);
    });

})

app.get('/getLoginInfo', auth.isLoggedIn, (req, res) =>{
    User.findOne({id: req.user.id}).then((user) => {
        var points = 0;
        if (user) {
            points = user["points"];
        }
        else{
            console.log("user not found")
        }
        res.json({"username":user["username"], "display":user["display"], "picture":req.user.picture, "points":points, "username": user["username"]});
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
        successRedirect: '/dashboard',
        failureRedirect: '/home'
}));

app.use('/auth/logout', (req, res)=>{
    req.session.destroy();
    res.redirect("/home")
})


const createLevels = ()=>{
    Level.create({url:"/", name:"black", flag:"flag", points:"1231"})
}

// running app
app.listen(PORT, "0.0.0.0", () => {
    console.log(`App running on port ${PORT}`);
});

