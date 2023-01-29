const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

module.exports = mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);