const mongoose = require("mongoose");
const GramaticaN1 = mongoose.model("GramaticaN1");

exports.getGramaticaN1 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const gramaticaN1 = await GramaticaN1.find().skip(skip).limit(limit);
      res.json(gramaticaN1);
    } catch (error) {
      res.status(500).send(error);
    }
}