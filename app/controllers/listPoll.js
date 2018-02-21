'use strict';
const Poll = require('../models/polls');

module.exports = (req, res) => findAllPolls(req, res);

let findAllPolls = (req, res) => {
  Poll.find({}).exec(function(err,data){
    res.render('index.ejs',{
      userLogged: req.isAuthenticated(),
      user: req.user,
      showButton: 0,
      pollList: data
    });
  });
};
