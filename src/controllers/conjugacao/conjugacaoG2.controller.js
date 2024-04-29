const mongoose = require("mongoose");
const ConjugacaoG2 = mongoose.model("ConjugacaoG2");

exports.getConjugacaoG2 = async (req, res) => {
    try {
        const conjugacaoG2 = await ConjugacaoG2.find();
        res.json(conjugacaoG2);
    } catch (error) {
        res.status(500).send(error);
    }
}