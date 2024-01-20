const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://r4npg63c-3000.use2.devtunnels.ms/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.serializeUser((user,done)=>{
    done(null, user);
})

passport.deserializeUser((user,done)=>{
    done(null, user);
})

const isLoggedIn = (req, res, next)=>{
  req.user? next():res.redirect("/home")
}

module.exports = {isLoggedIn}