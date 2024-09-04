const express = require("express");
require("./db/connection");
const user = require("./models/index");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 8000;

//---------------Routings---------------

const login = require("./routers/login.js");

//------------app use ---------------
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//----------API from router----
app.use(login);

///----------Listening app --------------
app.listen(port, () => {
  console.log(`The app is listening on ${port} port `);
});
