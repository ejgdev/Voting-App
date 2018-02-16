'use strict';
var Poll = require('../models/polls');

module.exports = (req, res) => {
  console.log("EXPORTS IN CONTROLLERS: "+req.body);
  //makePoll(req, res);
};

function makePoll(req, res){
  console.log("HOLIS: "+req);

}
