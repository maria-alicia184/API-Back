const mongoose = require("mongoose");
const GramaticaN2 = mongoose.model("GramaticaN2");

exports.getGramaticaN2 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const gramaticaN2 = await GramaticaN2.find().skip(skip).limit(limit);
      res.json(gramaticaN2);
    } catch (error) {
      res.status(500).send(error);
    }
}