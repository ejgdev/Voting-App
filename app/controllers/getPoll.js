const Poll = require('../models/polls');

const findAPoll = (req, res) => {
  const {
    id,
  } = req.params;

  Poll.findOne({
    _id: id,
  }).exec((err, data) => {
    res.render('poll.ejs', {
      userLogged: req.isAuthenticated(),
      id: req.params.id,
      link: req.get('host') + req.originalUrl,
      user: req.user,
      title: data.title,
      owner: data.owner,
      data: data.options,
    });
  });
};

module.exports = (req, res) => findAPoll(req, res);
