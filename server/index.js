// dependencies
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const PORT = process.env.PORT;
const app = express();
const mongoose = require('mongoose');

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
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "login.html"));
});

app.get("/app", auth.isLoggedIn, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "app.html"));
})

// google auth
app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get('/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/app',
        failureRedirect: '/login'
}));

app.use('/auth/logout', (req, res)=>{
    req.session.destroy();
    res.redirect("/login")
})

// running app
app.listen(PORT, "0.0.0.0", () => {
    console.log(`App running on port ${PORT}`);
});

