const Poll = require('../models/polls');

const makePollUpdate = (req, res) => {
  if (req.body.vote !== 'blankItem') {
    Poll.findById(req.params.id, (err, data) => {
      if (err) {
        res.redirect('/');
      } else {
        let whoVote = '';

        if (req.user) {
          whoVote = req.user.id;
        } else {
          const getUser = (req.headers['x-forwarded-for']
          || req.connection.remoteAddress
          || req.socket.remoteAddress
          || req.connection.socket.remoteAddress).split(',');

          const [user] = getUser;
          whoVote = user;
        }
        if (req.body.vote !== 'other') {
          // eslint-disable-next-line
          data.options[req.body.vote].value += 1;
          data.votedBy.push(whoVote);
        } else {
          data.options.push({
            name: req.body.customOption,
            value: 1,
          });
          data.votedBy.push(whoVote);
        }
        data.save((error) => {
          if (error) {
            res.redirect('/');
          } else {
            res.redirect(`/polls/${req.params.id}`);
          }
        });
      }
    });
  }
};

module.exports = (req, res) => {
  makePollUpdate(req, res);
};
