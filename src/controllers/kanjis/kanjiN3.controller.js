const mongoose = require("mongoose");
const KanjiN3 = mongoose.model("KanjiN3");

exports.getKanjiN3 = async (req, res) => {
    try {
        const kanjiN3 = await KanjiN3.find();
        res.json(kanjiN3);
    } catch (error) {
        res.status(500).send(error);
    }
}