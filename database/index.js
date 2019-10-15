
const mysql = require("mysql");
var parseString = require('xml2js').parseString;
var faker = require('faker');
const request = require('request');

var xml;
var xmlArr;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "housesdatabase"
});

request("http://s3-us-west-1.amazonaws.com/housesvitavann", function(error, response, body) {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  xml = body
  parseString(xml, function(err, result){
    xmlArr = result.ListBucketResult.Contents;

    xmlArr.forEach((item) => pool.query(`INSERT INTO houses (url_pathway, caption, verified) VALUES (${pool.escape(item.Key[0])}, ${pool.escape(faker.lorem.sentence())}, ${pool.escape(faker.random.boolean())});`, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        results;
        console.log(results);
      }
    }))
  })
})



module.exports = pool;