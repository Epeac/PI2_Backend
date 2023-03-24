const router = require("express").Router();
const mesureService = require("../mesures/measure.service");


async function controllerCreateOneMesure(req, res){
    const newMesure = await mesureService.createOne(req.body.decoded.payload);
    return res.status(201).send(newMesure);
}

router.post(
    "/",
    controllerCreateOneMesure
);

module.exports = router;