const Poll = require('../models/polls');

const findAllPolls = (req, res) => {
  Poll.find({
  }).exec((err, data) => {
    res.render('index.ejs', {
      userLogged: req.isAuthenticated(),
      user: req.user,
      showButton: 0,
      pollList: data,
    });
  });
};

module.exports = (req, res) => findAllPolls(req, res);
