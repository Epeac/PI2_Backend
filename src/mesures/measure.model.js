
const mongoose = require("mongoose");
const { Schema } = mongoose;
const MesureSerre = new Schema({
    humiditesol: Number,
    humiditeaire: Number,
    temperaturaire: Number,
    luminosite: Number,
});
const Mesure = mongoose.model("Mesure", MesureSerre);
module.exports = Mesure;