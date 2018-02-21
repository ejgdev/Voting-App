'use strict';
const Poll = require('../models/polls');

module.exports = (req, res) => makePoll(req, res);

let makePoll = (req, res) => {
  let myPoll = new Poll();
  myPoll.title = req.body.title;
  myPoll.owner = req.user.id;
  let temporal = req.body.options.split(",");
  myPoll.options = temporal.map(function(obj){
    let temp = {name:obj, value:0};
    return temp;
  });
  myPoll.save(function (err) {
    if (err) throw err;
    else res.redirect('/polls/'+myPoll.id);
  });
}
