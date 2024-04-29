const mongoose = require("mongoose");
const ConjugacaoG3 = mongoose.model("ConjugacaoG3");

exports.getConjugacaoG3 = async (req, res) => {
    try {
        const conjugacaoG3 = await ConjugacaoG3.find();
        res.json(conjugacaoG3);
    } catch (error) {
        res.status(500).send(error);
    }
}