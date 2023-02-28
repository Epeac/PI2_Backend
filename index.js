const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const MeasureService = require("./measure.service")
let payload = {
  temperature: "rien",
  humidity:"rien"
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

async function Addnewmeasure(data){
  //const newMeasure = await MeasureService.createone(data)
    payload ={
      temperature: data.humidity,
      humidity : data.temperature
    }
    console.log(payload)
}

app.post('/api/info',(req,res)=>{
  const data = req.body.decoded.payload
  Addnewmeasure(data);
 res.status(201).json(data)
});

app.get('/',(req,res)=>{
  const message = "Bienvenue dans la serre connecté";
  res.json(payload);
});

app.listen(port, () => {
  console.log(`API endpoint is listening on port ${port}`);
});

