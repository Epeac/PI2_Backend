const express = require('express')
const bodyParser = require('body-parser')
const querystring = require('querystring')
const app = express()
const port = 3000
const http = require('https')
const MeasureService = require("./src/mesures/measure.service")
const { response } = require('express')
let payload = {
  temperature: "rien",
  humidity:"rien"
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



s
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
  