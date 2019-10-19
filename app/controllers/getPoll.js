'use strict';
const Poll = require('../models/polls');

module.exports = (req, res) => findAPoll(req, res);

let findAPoll = (req, res) => {
  let id = req.params.id;
  Poll.findOne({ "_id": id }).exec(function(err,data){
    res.render('poll.ejs',{
      userLogged: req.isAuthenticated(),
      id: req.params.id,
      link: req.get('host')+req.originalUrl,
      user: req.user,
      title: data.title,
      owner: data.owner,
      data: data.options
    });
  });
}
