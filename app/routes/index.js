'use strict';

var path = process.cwd();
var createPoll = require(path + '/app/controllers/createPoll.js');
var pollDB = require(path + '/app/models/polls.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/');
		}
	}

	app.route('/')
		.get(function (req, res) {
			pollDB.find({}).exec(function(err,data){
				res.render('index.ejs',{
					userLogged: req.isAuthenticated(),
					user: req.user,
					pollList: data
				});
			});
		});

	app.route('/login')
		.get(function (req, res) {
			res.redirect('/');
		});

	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/');
		});

	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
				res.render('profile.ejs',{
					userLogged: req.isAuthenticated(),
					user: req.user
				});
		});

	app.route('/newpoll')	// NEW POLL ROUTE		-----------------
		.get(isLoggedIn, function (req, res) {
			res.render('newpoll.ejs',{
				userLogged: req.isAuthenticated(),
				user: req.user
			});
		})
		.post(isLoggedIn, function (req, res) {
			createPoll(req, res);
		});

		app.route('/polls')
			.get(function (req, res) {
					res.redirect('/');
			});

		app.route('/polls/:id')// POLL ROUTE		-----------------
		.get(function (req, res) {
			var id = req.params.id;
			pollDB.findOne({ "_id": id }).exec(function(err,data){
				console.log(data.title);
				res.render('poll.ejs',{
			  	userLogged: req.isAuthenticated(),
					id: req.params.id,
					link: req.get('host')+req.originalUrl,
					user: req.user,
					title: data.title,
					data: data.options
				});
			});
		})
		.post(isLoggedIn, function (req, res) {
			createPoll(req, res);
			res.redirect("/");
		});

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));
};
