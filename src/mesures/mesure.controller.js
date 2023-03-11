const router = require("express").Router();
const mesureService = require("./measure.service");
const authorizationMiddleware = require("../authorization/authorization.middleware");

async function controllerCreateOneMesure(req, res){
    const newMesure = await mesureService.createOne(req.body);
    return res.status(201).send(newMesure);
}

router.post(
    "/",
    authorizationMiddleware.canAccess(["admin"]),
    controllerCreateOneMesure
);

async function controllerGetAllMesure(req,res){
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;
    const mesure = await mesureService.findAll(limit, offset);
    return res.status(200).send(mesure);
}

router.get("/", controllerGetAllMesure);

async function controllerGetOneMesure(req, res, next){
    try{
        const mesure = await mesureService.findOne(req.params.id);
        return res.status(200).send(mesure);
    } catch(err){
        console.log(err);
    }
}
router("/:id", controllerGetOneMesure);

async function controllerUpdateOneMesure(req, res, next){
    try{
        const mesure = await mesureService.updateOne(req.params.id, req.body);
        return res.status(200).send(mesure);
    } catch(err){
        console.log(err)
    }
}

router.patch(
    "/:id",
    authorizationMiddleware.canAccess(["admin"]),
    controllerUpdateOneMesure
);

async function controllerDeleteOneMesure(req, res, next){
    try{
        const mesure = await mesureService.deleteOne(req.params.id);
        return res.status(200).send(mesure);
    }catch(err){
        console.log(err);
    }
}
router.delete(
    ":/id",
    authorizationMiddleware.canAccess(["admin"]),
    controllerDeleteOneMesure
);

module.exports = router;