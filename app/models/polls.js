'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
  owner: String,
	title: String,
	options: [{name:String,value:Number}],
  votedBy: []
});

module.exports = mongoose.model('Poll', Poll);
