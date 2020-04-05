const Poll = require('../models/polls');

const makePoll = (req, res) => {
  const myPoll = new Poll();
  myPoll.title = req.body.title;
  myPoll.owner = req.user.id;

  const temporal = req.body.options.split(',');
  myPoll.options = temporal.map((obj) => {
    const temp = {
      name: obj, value: 0,
    };
    return temp;
  });

  myPoll.save((err) => {
    if (err) throw err;
    else res.redirect(`/polls/${myPoll.id}`);
  });
};

module.exports = (req, res) => makePoll(req, res);
