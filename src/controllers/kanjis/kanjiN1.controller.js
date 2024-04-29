const mongoose = require("mongoose");
const KanjiN1 = mongoose.model("KanjiN1");

exports.getKanjiN1 = async (req, res) => {
    try {
        const kanjiN1 = await KanjiN1.find();
        res.json(kanjiN1);
    } catch (error) {
        res.status(500).send(error);
    }
}