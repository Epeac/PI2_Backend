const mongoose = require('mongoose');
require('dotenv').config()

const Mesure = require("./src/mesures/measure.model");
const mesurees = require("./testmesure.json");

function buildMesure(mesurees){
    return{
        humiditesol: mesurees.humiditesol,
        humiditeaire: mesurees.humiditeaire,
        temperatureaire: mesurees.temperatureaire,
        luminosite: mesurees.luminosite,
    };
}

async function importBulkMovie(){
    const MesureArray = mesurees.map((mesurees)=>
        buildMesure(mesurees)
    );
    await Mesure.insertMany(MesureArray);
}
async function main(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Import script connected to database, start import.");
    await importBulkMovie();
    console.log("Finished importing");
}
main();


//mongoose.connect(process.env.MONGO_URI).then((success)=> console.log("connecté à mongoDB"))


async function query_id(id){
    return (await Location.findById(id).exec())
}
async function query_mesuredate(n){
    return(await Location.find({mesuredate : n}).exec())

}
async function delete_id(id){
    Location.findByIdAndDelete(id)
    return("Supprimé")
}
async function add_mes(mes){
    await mes.save()
    return("Ajoutée")
}
