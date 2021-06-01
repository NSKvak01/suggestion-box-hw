const mongoose = require("mongoose")

let suggestionSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        lowercase: true,
        required:true
    },
    author:{
        type:String,
        lowercase: true

    },
    suggestion:{
        type:String,
        lowercase: true,
        required:true

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