'use strict';
const Poll = require('../models/polls');

module.exports = (req, res) => {
  makePollUpdate(req, res);
};

function makePollUpdate(req, res){
  console.log("PROBANDO OTRA OPCION");
  console.log(req.body);

  if(req.body.vote !== "blankItem"){
    Poll.findById(req.params.id,function(err,data){
      if(err){
					res.redirect('/');
				}
        else {
          let whoVote = "";

          if(req.user){
            whoVote = req.user.id;
          }
          else{
            whoVote = (req.headers['x-forwarded-for'] ||
                   req.connection.remoteAddress ||
                   req.socket.remoteAddress ||
                   req.connection.socket.remoteAddress).split(",")[0];
          };
          if (req.body.vote !== "other"){
            data.options[req.body.vote].value +=1;
            data.votedBy.push(whoVote);
          }
          else{
              data.options.push({name:req.body.customOption, value:1});
              data.votedBy.push(whoVote);
          }

					data.save(function(err){
						if(err) {
              res.redirect('/');
            }
            else {
              res.redirect('/polls/'+req.params.id);
            }
          });
        }
    });
  }
}
