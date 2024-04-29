const mongoose = require("mongoose");
const GramaticaN4 = mongoose.model("GramaticaN4");

exports.getGramaticaN4 = async (req, res) => {
    try {
        const gramaticaN4 = await GramaticaN4.find();
        res.json(gramaticaN4);
    } catch (error) {
        res.status(500).send(error);
    }
}