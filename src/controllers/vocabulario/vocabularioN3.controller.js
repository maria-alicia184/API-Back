const mongoose = require('mongoose');
const VocabularioN3 = mongoose.model('VocabularioN3');

exports.getVocabularioN3 = async (req, res) => {
    try {
        const vocabularioN3 = await VocabularioN3.find();
        res.json(vocabularioN3);
    } catch (error) {
        res.status(500).send(error);
    }
}