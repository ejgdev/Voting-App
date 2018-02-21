'use strict';
const Poll = require('../models/polls');

module.exports = (req, res) => findMyPolls(req, res);

let findMyPolls = (req, res) => {
  Poll.find({owner: req.user.id}).exec(function(err,data){
    res.render('index.ejs',{
      userLogged: req.isAuthenticated(),
      user: req.user,
      showButton: 1,
      pollList: data
    });
  });
};
