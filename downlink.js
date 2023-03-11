const express = require('express')
var axios = require("axios").default;
const app = express()
const port = 3000
const followRedirects = require('follow-redirects');

app.post('/send/data', (req, res) => {
  var options = {
    method: 'POST',
    url: 'https://console.helium-iot.eu/api/v1/down/aca6a59d-b4d4-4788-9502-6fe05a05fcf0/gopWugdObwKjttAPto_Wx4SPEjf4ZpGd',
    headers: {'Content-Type': 'application/json'},
    data: {payload_raw: 'SGVsbG8gbGEgQ3liZXIgVGVhbQ==', port: 2, confirmed: false}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
});

app.listen(port, () => {
  console.log(`API endpoint is listening on port ${port}`);
});

