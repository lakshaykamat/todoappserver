const mongoose = require("mongoose")

//connecting to db
const connectDB = (url)=>{
    return mongoose.connect(url)
}
module.exports = connectDB
