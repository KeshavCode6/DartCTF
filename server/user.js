const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type:String,
            required: [true, "User does not have a username"]
        },
        password: {
            type:String,
            required: [true, "User does not have a password"]
        }
    },
)
// Create a model based on the schema
const User = mongoose.model('User', userSchema)
  
module.exports = User;
  