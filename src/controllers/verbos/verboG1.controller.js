const mongoose = require("mongoose");
const VerboG1 = mongoose.model("VerboG1");

exports.getVerboG1 = async (req, res) => {
    try {
        const verboG1 = await VerboG1.find();
        res.json(verboG1);
    } catch (error) {
        res.status(500).send(error);
    }
}