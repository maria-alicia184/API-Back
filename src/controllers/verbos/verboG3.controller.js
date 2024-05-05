const mongoose = require("mongoose");
const VerboG3 = mongoose.model("VerboG3");

exports.getVerboG3 = async (req, res) => {
    try {
    //funcao para limitar a quantidade de itens por pagina
      const page = parseInt(req.query.page) || 1;
      const limit = 25;
      const skip = (page - 1) * limit;

      const verboG3 = await VerboG3.find().skip(skip).limit(limit);
      res.json(verboG3);
    } catch (error) {
      res.status(500).send(error);
    }
};