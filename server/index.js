const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const db = require("../database/index.js");

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening on ${port}`));
