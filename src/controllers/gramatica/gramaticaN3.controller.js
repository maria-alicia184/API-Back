const mongoose = require("mongoose");
const GramaticaN3 = mongoose.model("GramaticaN3");

exports.getGramaticaN3 = async (req, res) => {
    try {
        const gramaticaN3 = await GramaticaN3.find();
        res.json(gramaticaN3);
    } catch (error) {
        res.status(500).send(error);
    }
}