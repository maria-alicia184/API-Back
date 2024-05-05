const mongoose = require("mongoose");
const GramaticaN3 = mongoose.model("GramaticaN3");

exports.getGramaticaN3 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const gramaticaN3 = await GramaticaN3.find().skip(skip).limit(limit);
      res.json(gramaticaN3);
    } catch (error) {
      res.status(500).send(error);
    }
}