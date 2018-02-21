'use strict';
const Poll = require('../models/polls');

module.exports = (req, res) => findAllPolls(req, res);

let findAllPolls = (req, res) => {
  Poll.deleteOne({ "_id": req.params.id }, function(err, obj) {
    if (err) throw err;
    console.log("Poll delete");
  });
res.redirect('/mypolls');
}
