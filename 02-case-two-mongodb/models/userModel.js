const mongoose = require("mongoose")

// to create a user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name."]
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Pleas add a password"]
    }
},
    {
        timestemps: true
    }
)

// to create a user model
const User = mongoose.model("User", userSchema);


module.exports = User