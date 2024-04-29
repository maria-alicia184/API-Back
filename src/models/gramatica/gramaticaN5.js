const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gramaticaN5Schema = new Schema({
    id: { type: String },
    Grammar: { type: String },
    Strokes: { type: String },
    "JLPT-test": { type: String },
    "Word-Type": { type: String },
    Reading: { type: String },
    Pronunciation: { type: String },
    Translation: { type: String },
});


module.exports = mongoose.model("GramaticaN5", gramaticaN5Schema);