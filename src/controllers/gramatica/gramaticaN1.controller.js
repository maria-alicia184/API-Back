const mongoose = require("mongoose");
const GramaticaN1 = mongoose.model("GramaticaN1");

exports.getGramaticaN1 = async (req, res) => {
    try {
        const gramaticaN1 = await GramaticaN1.find();
        res.json(gramaticaN1);
    } catch (error) {
        res.status(500).send(error);
    }
}