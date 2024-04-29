const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conjugacaoG1Schema = new Schema({
    id: { type: String },
    Vocabulary: { type: String },
    
});


module.exports = mongoose.model("ConjugacaoG1", conjugacaoG1Schema);