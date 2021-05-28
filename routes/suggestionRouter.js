var express = require('express');
var router = express.Router();

var {
  getAllSuggestions, 
  getSingleSuggestion,
  createSuggestion,
  updateSuggestion,
  deleteSuggestion,
  getSuggestionsByAuthor} = require("./controller/suggestionController")
/* GET users listing. */
router.get('/all-suggestions', getAllSuggestions);
router.get('/single-suggestion/:id', getSingleSuggestion);
router.post('/create-suggestion', createSuggestion);
router.patch('/update-suggestion/:id', updateSuggestion);
router.delete('/delete-suggestion/:id', deleteSuggestion);
router.get(`/by-author-suggestion`, getSuggestionsByAuthor)

module.exports = router;
