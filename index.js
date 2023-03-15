require("dotenv").config();
const express = require('express');
const measureController = require("./src/mesures/mesure.controller");
const userController = require("./src/users/users.controller");
const downlinkController = require("./src/downlink/downlink.controller");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("./src/authentication/local.strategy");
require("./src/authentication/jwt.strategy");
const passport = require("passport");

const app = express();
const port = 3000;

let cors = require("cors");
app.use(cors());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(
  "/mesures",
  passport.authenticate("jwt", { session: false }),
  measureController
);
app.use("/users", userController);

app.use("/downlink",downlinkController);





async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to Mongo Database");

  app.listen(port, () => {
    console.log(
      `API listening on port ${port}, visit http://localhost:${port}/`
    );
  });
}

main();
