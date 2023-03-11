require("dotenv").config();
const express = require('express');
const measureController = require("./src/mesures/mesure.controller");
const userController = require("./src/users/users.controller");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("./src/authentication/local.strategy");
require("./src/authentication/jwt.strategy");
const passport = require("passport");
const querystring = require('querystring')


const app = express()
const port = 3000




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  const message = "Bienvenue dans la serre connecté";
  res.json(message);
});

app.listen(port, () => {
  console.log(`API endpoint is listening on port ${port}`);
});
