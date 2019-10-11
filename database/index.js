const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/photogal");

var db = mongoose.connection;

db.on("err", err => {
  console.log(err);
});
db.once("open", () => console.log("connected to db"));

// var homeSchema = new Schema({
//   name: string,
//   url_pathway: string,
//   caption: string,
//   index: number,
//   verified: boolean
// });

// var homes = mongoose.model("homes", homeSchema);
