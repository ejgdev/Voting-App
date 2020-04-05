const Poll = require('../models/polls');

const findMyPolls = (req, res) => {
  Poll.find({
    owner: req.user.id,
  }).exec((err, data) => {
    res.render('index.ejs', {
      userLogged: req.isAuthenticated(),
      user: req.user,
      showButton: 1,
      pollList: data,
    });
  });
};

module.exports = (req, res) => findMyPolls(req, res);
