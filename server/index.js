// dependencies
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const PORT = process.env.PORT;
const app = express();
const mongoose = require('mongoose');
const compiler = require("compilex")
compiler.init({stats:true});

// connecting to mongodb
mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.ffmynhi.mongodb.net/?retryWrites=true&w=majority`).then(()=>{console.log("Connected to mongodb");}).catch((error) => {console.error(error)});

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
    console.log(req.user);
    res.sendFile(path.join(__dirname, "../build", "play.html"));
})

app.get("/codeEditor", (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "codeEditorTest.html"));
})

// code running
app.post("/codeEditor", (req, res)=>{
    var code = req.body.code;
    var envData = { OS : "windows"}; 
    
    compiler.compilePython( envData , code , function(data){
        console.log(data);
        if(data.output){
            res.send(data);
        }
        else
        {
            res.send({output:"Code produced no output"})
        }
    });    
})


// google auth
app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

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

