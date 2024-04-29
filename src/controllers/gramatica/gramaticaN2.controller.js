const mongoose = require("mongoose");
const GramaticaN2 = mongoose.model("GramaticaN2");

exports.getGramaticaN2 = async (req, res) => {
    try {
        const gramaticaN2 = await GramaticaN2.find();
        res.json(gramaticaN2);
    } catch (error) {
        res.status(500).send(error);
    }
}