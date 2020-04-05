const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./app/routes/index.js');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true,
})); // true for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
require('dotenv').config();
require('./app/config/passport')(passport);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

app.use('/controllers', express.static(`${process.cwd()}/app/controllers`));
app.use('/views', express.static(`${process.cwd()}/views`));
app.use('/common', express.static(`${process.cwd()}/app/common`));

app.use(session({
  secret: 'secretClementine',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Node.js listening on port ${port}...`);
});
