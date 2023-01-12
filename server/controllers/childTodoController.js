var db = require("../database/index");

var selectAll = function (req, res) {
    db.query("SELECT * FROM todoList", (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };

  var update =(req,res) => {
    db.query(`UPDATE todoList SET done = "${req.body.done}"  WHERE id = ${req.params.id} `, (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    })
  }
  
  module.exports = { selectAll, update};
