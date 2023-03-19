const mongoose = require('mongoose')
//Task Schema
const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'title is required'],
        trim:true,
        maxlength:[20,'title length not more than 20']
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    timestap:{
        type:Date,
        default:Date()
    }
});
module.exports = mongoose.model("Tasks",TaskSchema)