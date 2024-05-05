const mongoose = require("mongoose");
const GramaticaN5 = mongoose.model("GramaticaN5");

exports.getGramaticaN5 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const gramaticaN5 = await GramaticaN5.find().skip(skip).limit(limit);
      res.json(gramaticaN5);
    } catch (error) {
      res.status(500).send(error);
    }
}