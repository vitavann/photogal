const db = require("./index.js");

const getAllhouses = (req, res) => {
  const queryString = `SELECT * FROM houses;`;
  db.query(queryString,(err, results) =>{
    if(err){
      console.log('err:',err)
      res.status(500).send(err);
    } else {
      console.log('results:',results)
      res.status(200).send(results)
    }
  });
};

module.exports = {
  getAllhouses: getAllhouses
}