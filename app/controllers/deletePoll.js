const Poll = require('../models/polls');

const findAllPolls = (req, res) => {
  Poll.deleteOne({
    _id: req.params.id,
  }, (err) => {
    if (err) {
      throw err;
    }

    // eslint-disable-next-line
    console.log('Poll delete');
  });
  res.redirect('/mypolls');
};

module.exports = (req, res) => findAllPolls(req, res);
