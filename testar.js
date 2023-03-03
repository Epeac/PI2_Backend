const http = require("https");

const options = {
  "method": "POST",
  "hostname": "console.helium-iot.eu",
  "port": null,
  "path": "/api/v1/down/c76710c3-658b-4691-8886-d49eee94e8cb/DijN5TUhbznt2KGnOYoGjB-5m0H70BIK",
  "headers": {
    "Content-Type": "application/json",
    "Content-Length": "69"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({payload_raw: 'SGVsbG8gTG9SYQ== ', port: 2, confirmed: false}));
req.end();