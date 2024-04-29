const mongoose = require('mongoose');
const VocabularioN4 = mongoose.model('VocabularioN4');

exports.getVocabularioN4 = async (req, res) => {
    try {
        const vocabularioN4 = await VocabularioN4.find();
        res.json(vocabularioN4);
    } catch (error) {
        res.status(500).send(error);
    }
}