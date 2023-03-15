const router = require("express").Router();
const mesureService = require("./measure.service");
const authorizationMiddleware = require("../authorization/authorization.middleware");
const httpErrorHelper = require("../custom-errors/http-error.helper");

async function controllerCreateOneMesure(req, res){
    const newMesure = await mesureService.createOne(req.body.decoded.payload);
    return res.status(201).send(newMesure);
}

router.post(
    "/",
    authorizationMiddleware.canAccess([]),
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
       return httpErrorHelper(err, req, res, next);
    }
}

router.get("/:id", controllerGetOneMesure);

async function controllerUpdateOneMesure(req, res, next){
    try{
        const mesure = await mesureService.updateOne(req.params.id, req.body);
        return res.status(200).send(mesure);
    } catch(err){
        return httpErrorHelper(err, req, res, next);
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
        httpErrorHelper(err, req, res, next)
    }
}
router.delete(
    ":/id",
    authorizationMiddleware.canAccess(["admin"]),
    controllerDeleteOneMesure
);

async function getLastMesure(req, res, next){
    try{
        const mesure = await mesureService.findRecentOne();
        return res.status(200).send(mesure);
    }catch(err){
        return httpErrorHelper(err, req, res, next);
    }
}

router.get("/last/last",getLastMesure);

module.exports = router;