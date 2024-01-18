// dependencies
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const compiler = require("compilex")
const fs = require('fs');
const User = require('./user')
compiler.init({stats:true});

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
    res.sendFile(path.join(__dirname, "../build", "play.html"));
})

app.get("/codeEditor", (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challengeTemplate.html"));
})

app.get("/cryptography/c1", (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "challenges/crypto/c1.html"));
})

//enter flag
app.post("/enterFlag", (req, res)=>{
})

// code running
app.post("/codeEditor", (req, res)=>{
    var code = req.body.code;
    var envData = { OS : "windows"}; 
    
    compiler.compilePython( envData , code , function(data){
        if(data.output){
            res.send(data);
        }
        else
        {
            res.send({output:"Code produced no output"})
        }
    });

    fs.readdir("../temp/", (err, files) => {

        if (err) {
          console.error("Error reading directory \"temp\"", err);
          return;
        }

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
        
            // Check if it's a file before attempting to delete
            fs.stat(filePath, (err, stats) => {
              if (err) {
                console.error('Error checking file stats:', err);
                return;
              }
        
              if (stats.isFile()) {
                // Delete the file
                fs.unlink(filePath, err => {
                  if (err) {
                    console.error(`Error deleting file ${filePath}:`, err);
                  }
                });
              }
            });
        });
      
    });
})

app.get('/getLoginInfo', auth.isLoggedIn, (req, res) =>{
    User.findOne({ id:req.user.id}).then((user) => {
        var points = 0;
        if (!user) {
            const user = new User({
                id: req.user.id,
                username:`${req.user.name.givenName} ${req.user.name.familyName}`,
                points:points
            });  
            user.save();        
        }
        else{
            points = user["points"];
        }
        res.json({"username":req.user.name, "picture":req.user.picture, "points":points})
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

