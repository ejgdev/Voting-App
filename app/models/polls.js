const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const Poll = new Schema({
  owner: String,
  title: String,
  options: [{
    name: String,
    value: Number,
  }],
  votedBy: [],
});

module.exports = mongoose.model('Poll', Poll);
