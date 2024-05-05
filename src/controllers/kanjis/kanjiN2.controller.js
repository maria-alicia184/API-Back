const mongoose = require("mongoose");
const KanjiN2 = mongoose.model("KanjiN2");

exports.getKanjiN2 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const kanjiN2 = await KanjiN2.find().skip(skip).limit(limit);
      res.json(kanjiN2);
    } catch (error) {
      res.status(500).send(error);
    }
}