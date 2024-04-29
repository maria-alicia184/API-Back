const mongoose = require("mongoose");
const GramaticaN5 = mongoose.model("GramaticaN5");

exports.getGramaticaN5 = async (req, res) => {
    try {
        const gramaticaN5 = await GramaticaN5.find();
        res.json(gramaticaN5);
    } catch (error) {
        res.status(500).send(error);
    }
}