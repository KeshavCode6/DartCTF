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

// middlewares
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


// signup
app.post("/signup", async (req, res) => {
    let user = req.body.user;
    let pwd = req.body.pwd;

    if (user != null && pwd != null) {
        // Generate a salt
        const salt = await bcrypt.genSalt(10); // 10 is the number of rounds

        // Hash the password using the generated salt
        const hashedPwd = await bcrypt.hash(pwd, salt);

        const newUser = new User({
            "username": user,
            "password": hashedPwd
        });

        await newUser.save();
        res.redirect("/login")
    }
});

app.post("/login", async (req, res) => {
    const username = req.body.user;
    const password = req.body.pwd;
    // Find the user in the database based on the username
    const user = await User.findOne({ username: username }).exec();

    if (user) {
        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const token = jwt.sign({"username":user.username}, process.env.ACCESS_TOKEN_SECRET)
            res.cookie('jwtToken', token, { httpOnly: true });
            res.json({ success: true, redirectTo: "/home" });
        } else {
            res.json({ success: false, message: "Invalid Credentials" });
        }
    } else {
        // User not found
        res.send("User doesn't exist");
    }
});

app.get("/home", auth.jwtAuth, (req, res)=>{
    res.send("haha")
})


// running app
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
