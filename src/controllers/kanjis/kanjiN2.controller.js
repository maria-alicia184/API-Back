const mongoose = require("mongoose");
const KanjiN2 = mongoose.model("KanjiN2");

exports.getKanjiN2 = async (req, res) => {
    try {
        const kanjiN2 = await KanjiN2.find();
        res.json(kanjiN2);
    } catch (error) {
        res.status(500).send(error);
    }
}