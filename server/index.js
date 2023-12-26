// dependencies
const path = require('path');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const PORT = process.env.PORT;
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// schemas for mongodb
const User = require("./user.js")

// connecting to mongodb
mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.ffmynhi.mongodb.net/?retryWrites=true&w=majority`).then(()=>{console.log("Connected to mongodb");}).catch((error) => {console.error(error)});

const auth = require('./authMiddleWare')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build/')));
app.use(cookieParser())

// routes
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "signup.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "login.html"));
});

app.get("/home", auth.jwtAuth, (req, res)=>{
    res.sendFile(path.join(__dirname, "../build", "app.html"));
})
// signup
app.post("/signup", async (req, res) => {
    let user = req.body.user;
    let pwd = req.body.pwd;
    let pwdConfirm = req.body.pwdConfirm;

    console.log(pwd, pwd.length, pwd!=null);
    console.log(user, user.length, user!=null);

    if (user == null && pwd == null) {
        res.json({"success":false, "message":"Username or password not provided"})
        return;
    }

    if(user.length<3 || pwd.length < 6)
    {
        res.json({"success":false, "message":"Fill out all fields"})
        return;
    }

    if(pwd!=pwdConfirm)
    {
        res.json({"success":false, "message":"Passwords don't match"})
        return;
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10); // 10 is the number of rounds

    // Hash the password using the generated salt
    const hashedPwd = await bcrypt.hash(pwd, salt);

    const newUser = new User({
        "username": user,
        "password": hashedPwd
    });

    await newUser.save();
    res.json({"success":true, "redirect":"/login"})
    
});

app.post('/refresh', (req, res) => {
    console.log("Refreshing Token")
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken == null) return res.sendStatus(401);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        try {
            const accessToken = jwt.sign({ "username": user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "60m" });

            // Set the new access token in the cookie
            res.json({"jwt":accessToken});

        } catch (error) {
            console.error('Error setting cookie:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});



app.post("/login", async (req, res) => {
    const username = req.body.user;
    const password = req.body.pwd;

    if(username.length<3 || password.length<6)
    {
        res.json({ success: false, message: "Fill out all fields fully" });
        return;
    }

    // Find the user in the database based on the username
    const user = await User.findOne({ username: username }).exec();

    if (user) {
        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const token = auth.generateAccessToken({"username":user.username})
            const refreshToken = auth.generateRefreshToken({"username":user.username})

            res.cookie('jwtToken', token, { httpOnly: false }, );
            res.cookie('refreshToken', refreshToken, { httpOnly: false });
            res.json({"success": true, "redirect": "/home" });
        } else {
            res.json({ "success": false, "message": "Invalid Credentials" });
        }
    } else {
        // User not found
        res.json({"success": false,"message":"User doesn't exist"});
    }
});

// running app
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
