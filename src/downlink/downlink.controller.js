var axios = require("axios").default;
const httpErrorHelper = require("../custom-errors/http-error.helper");
const router = require("express").Router();

async function SendingData(req, res, next){
    const payload = btoa(req.body.message,'base64');
    console.log(payload);
    var options = {
        method: 'POST',
        url: 'https://console.helium-iot.eu/api/v1/down/aca6a59d-b4d4-4788-9502-6fe05a05fcf0/gopWugdObwKjttAPto_Wx4SPEjf4ZpGd',
        headers: {'Content-Type': 'application/json'},
        data: {payload_raw: payload, port: 2, confirmed: false}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        return res.status(201).send("Message envoyé");
      }).catch(function (error) {
        console.error(error);
        return httpErrorHelper(err, req, res, next);
      });
      
}
router.post("/",SendingData);

module.exports = router;
