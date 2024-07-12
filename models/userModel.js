const mongoose = require("mongoose")
const passport = require("passport")

const userModel = mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model("user", userModel)