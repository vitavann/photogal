const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const db = require("../database/index.js");
const dbMethods = require("../database/dbMethods.js");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get("/houses", (req, res) =>
  dbMethods.getAllhouses(req,res));


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening on ${port}`));
