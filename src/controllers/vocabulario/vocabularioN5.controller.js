const mongoose = require('mongoose');
const VocabularioN5 = mongoose.model('VocabularioN5');

exports.getVocabularioN5 = async (req, res) => {
    try {
        const vocabularioN5 = await VocabularioN5.find();
        res.json(vocabularioN5);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getVocabulario = async (req, res) => {
    try {
        const vocabulario = await VocabularioN5.find({"Vocabulary": { $regex: /青/ }});
        res.json(vocabulario);
    } catch (error) {
        res.status(500).send(error);
    }
}

