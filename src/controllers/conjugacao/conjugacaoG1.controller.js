const mongoose = require("mongoose");
const ConjugacaoG1 = mongoose.model("ConjugacaoG1");

exports.getConjugacaoG1 = async (req, res) => {
    try {
        const conjugacaoG1 = await ConjugacaoG1.find();
        res.json(conjugacaoG1);
    } catch (error) {
        res.status(500).send(error);
    }
}