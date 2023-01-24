var db = require("../../database/index");

var selectAllP = function (req, res) {
  console.log("test selectAll");
    db.query("SELECT * FROM games", (err, games, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(games);
      }
    });
  };
  var selectAllC = function (req, res) {
    console.log("test selectAll");
      db.query("SELECT * FROM games", (err, games, fields) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(games);
        }
      });
    };
  var add =(req,res) => {
    db.query(`INSERT INTO games (image,link) VALUES ( "${req.body.image}","${req.body.link}")`, (err, games, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(games);
      }
    })
  }
  module.exports = { selectAllP,selectAllC,add};