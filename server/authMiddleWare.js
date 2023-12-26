const jwt = require('jsonwebtoken')

const jwtAuth = (req, res, next) => {
    const token = req.cookies.jwtToken;

    if(token==null){
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next()
    })
}

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:"10m"})
}

const generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn:"1d"});
}

module.exports = {
    jwtAuth,
    generateAccessToken,
    generateRefreshToken
};