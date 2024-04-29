const mongoose = require('mongoose');
const VocabularioN1 = mongoose.model('VocabularioN1');

exports.getVocabularioN1 = async (req, res) => {
    try {
        const vocabularioN1 = await VocabularioN1.find();
        res.json(vocabularioN1);
    } catch (error) {
        res.status(500).send(error);
    }
}