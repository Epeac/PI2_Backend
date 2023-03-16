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
    authorizationMiddleware.canAccess(["admin"]),
    controllerCreateOneMesure
);

async function getLastMesure(req, res, next){
    try{
        const mesure = await mesureService.findRecentOne();
        return res.status(200).send(mesure);
    }catch(err){
        return httpErrorHelper(err, req, res, next);
    }
}

router.get("/last",getLastMesure);

module.exports = router;