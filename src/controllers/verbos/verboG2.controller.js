const mongoose = require("mongoose");
const VerboG2 = mongoose.model("VerboG2");

exports.getVerboG2 = async (req, res) => {
    try {
        const verboG2 = await VerboG2.find();
        res.json(verboG2);
    } catch (error) {
        res.status(500).send(error);
    }
}