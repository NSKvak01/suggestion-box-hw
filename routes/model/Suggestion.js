const mongoose = require("mongoose")

let suggestionSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
    },
    author:{
        type:String,
    },
    suggestion:{
        type:String,
    },
    likes:{
        type:Number
    },
    anonymous:{
        type:Boolean
    },
    timeCreated:{
        type:Date
    },
})

module.exports = mongoose.model("suggestion-hw", suggestionSchema )