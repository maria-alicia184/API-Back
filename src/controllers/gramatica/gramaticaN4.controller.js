const mongoose = require("mongoose");
const GramaticaN4 = mongoose.model("GramaticaN4");

exports.getGramaticaN4 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const gramaticaN4 = await GramaticaN4.find().skip(skip).limit(limit);
      res.json(gramaticaN4);
    } catch (error) {
      res.status(500).send(error);
    }
}