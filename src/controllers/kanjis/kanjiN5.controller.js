const mongoose = require("mongoose");
const KanjiN5 = mongoose.model("KanjiN5");

exports.getKanjiN5 = async (req, res) => {
    try {
        const kanjiN5 = await KanjiN5.find();
        res.json(kanjiN5);
    } catch (error) {
        res.status(500).send(error);
    }
}
