const mongoose = require("mongoose");
const VerboG3 = mongoose.model("VerboG3");

exports.getVerboG3 = async (req, res) => {
    try {
        const verboG3 = await VerboG3.find();
        res.json(verboG3);
    } catch (error) {
        res.status(500).send(error);
    }
}