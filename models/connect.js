const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0/blog-website").then(()=>{
    console.log("Connect to db")
}).catch(err => console.log(err))