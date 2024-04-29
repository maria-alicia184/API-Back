const mongoose = require('mongoose');
const VocabularioN2 = mongoose.model('VocabularioN2');

exports.getVocabularioN2 = async (req, res) => {
    try {
        const vocabularioN2 = await VocabularioN2.find();
        res.json(vocabularioN2);
    } catch (error) {
        res.status(500).send(error);
    }
}