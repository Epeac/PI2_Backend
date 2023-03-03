const http = require("https");

function updateCache(object_name, callback) {
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
            if(res.statusCode !==200){
                console.log('ça marche')
            }
        });
      
        res.on("end", function () {
          const body = Buffer.concat(chunks);
          if (res.statusCode !== 200 && app.retry_count < 10) {
            app.retry_count += 1;
            updateCache(parm, callback)
          }  
          console.log(body.toString());
        });
      });
      
      req.write(JSON.stringify({payload_raw: 'SGVsbG8gTG9SYQ== ', port: 2, confirmed: false}));
      req.end();
      
}