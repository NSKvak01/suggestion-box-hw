const Suggestion = require("../model/Suggestion")


async function getAllSuggestions (req, res){
    try {
        let foundSuggestions = await Suggestion.find({})
        res.json({message:"success", foundSuggestions})
    } catch (error) {
        res.status(500).json({message:"error", error:error.message})
    }
}

async function getSingleSuggestion(req, res){
    try {
        let findSuggestion = await Suggestion.findById(req.params.id)
        res.json({message:"success", findSuggestion}) 
    } catch (error) {
        res.status(500).json({message:"error", error:error.message})
    }
}

async function createSuggestion(req,res){
const {title, author, suggestion, likes, anonymous} = req.body
let errorObj = {}

    if(Object.keys(errorObj).length>0){
        return res.status(500).json({message:'error', payload:errorObj})
    }
    
    try {
        let createdSuggestion = new Suggestion ({
            title, 
            author, 
            suggestion, 
            likes,
            anonymous,
            timeCreated:Date.now()
        })
        let savedSuggestion = await createdSuggestion.save()
        res.json({message:'Success', savedSuggestion})
    } catch (error) {
        res.status(500).json({message:"error", error:error.message})
    }
}

async function updateSuggestion(req,res){
    let errorObj = {}
    if(Object.keys(errorObj).length>0){
        return res.status(500).json({message:'error', payload:errorObj})
    }

    try {
        let title = req.body.title;
        let suggestion = req.body.suggestion;

        let updatedSuggestion = await Suggestion.findByIdAndUpdate(req.params.id, {$set: { title: title, suggestion:suggestion}}, {new:true})
        // updatedSuggestion = await Suggestion.findByIdAndUpdate(req.params.id, suggestion, {new:true})
        res.json({message:"success", updatedSuggestion})
    } catch (error) {
        res.status(500).json({message:"error", error:error.message})
    }
}

async function deleteSuggestion (req,res){
    try {
        let deletedSuggestion = await Suggestion.findByIdAndRemove(req.params.id)
        res.json({message:"success", deletedSuggestion})
    } catch (error) {
        res.status(500).json({message:'error', error:error.message})
    }
}

async function getSuggestionsByAuthor(req,res){
    try {
        let list = []
        let foundAuthor = await Suggestion.find({})
        foundAuthor.forEach((item)=>{
            if(item.author === req.query.author){
                list.push(item)
            }
        })
        console.log(foundAuthor, list)
        res.json({message:"success", list})
    } catch (error) {
        res.status(500).json({message:"error", error:error.message})
    }
}


module.exports = {
    getAllSuggestions,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion, 
    getSuggestionsByAuthor
}