const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conjugacaoG3Schema = new Schema({
    id: { type: String },
    Vocabulary: { type: String },
    
});


module.exports = mongoose.model("ConjugacaoG3", conjugacaoG3Schema);