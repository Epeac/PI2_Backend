const Mesure = require("./measure.model");
const { NotFoundError } = require("../custom-errors/not-found.error");
const { ValidationError } = require("../custom-errors/validation.error");

async function createOne(mesureData){
    const mesure = new Mesure(mesureData);
    return mesure.save();
}
/**
 * Find multiple recommandation with custom limit and offset (pagination)
 * @param limit
 * @param offset
 * @returns {Query<Array<HydratedDocument<unknown, {}, {}>>, Document<unknown, any, unknown> & unknown extends {_id?: infer U} ? IfAny<U, {_id: Types.ObjectId}, Required<{_id: U}>> : {_id: Types.ObjectId} & {}, {}, unknown> & {}}
 */
async function findAll(limit=20,offset=0){
    return Mesure.find().limit(limit).skip(offset);
}
async function findOne(id){
    let mesure;
    try{
        mesure = await Mesure.findByID(id);
    }catch(e){
        console.error(e);
        throw new ValidationError(e.message);
    }
    return mesure;
}

async function updateOne(id, mesureData){
    const mesure = await findOne(id);
    for(const mesureElelmentKey in mesureData){
        if(
            mesureElelmentKey[0] !== "_"&&
            mesureData.hasOwnProperty(mesureElelmentKey)
        ){
            mesure[mesureElelmentKey]= mesureData[mesureElelmentKey];
        }
    }
    await mesure.save();
    return await findOne(id);
}
async function deleteOne(id){
    const mesure = await findOne(id);
    return mesure.remove();
}

async function findRecentOne(){
    return Mesure.find().sort({_id:-1}).limit(1);
}
module.exports = {createOne, findAll, findOne, updateOne,deleteOne,findRecentOne}