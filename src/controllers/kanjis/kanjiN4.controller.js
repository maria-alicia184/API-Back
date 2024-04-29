const mongoose = require("mongoose");
const KanjiN4 = mongoose.model("KanjiN4");

exports.getKanjiN4 = async (req, res) => {
    try {
        const kanjiN4 = await KanjiN4.find();
        res.json(kanjiN4);
    } catch (error) {
        res.status(500).send(error);
    }
}