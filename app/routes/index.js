'use strict';
const path = process.cwd();
const profileC = require(path + '/app/controllers/profile.js');
const createHandler = require(path + '/app/controllers/createHandler.js');
const createPoll = require(path + '/app/controllers/createPoll.js');
const updatePoll = require(path + '/app/controllers/updatePoll.js');
const listPoll = require(path + '/app/controllers/listPoll.js');
const getPoll = require(path + '/app/controllers/getPoll.js');
const deletePoll = require(path + '/app/controllers/deletePoll.js');
const findMyPolls = require(path + '/app/controllers/listMyPoll.js');

module.exports = function (app, passport) {

	app.route('/')
		.get((req, res) => listPoll(req, res));

	app.route('/login')
		.get((req, res) => res.redirect('/'));

	app.route('/logout')
		.get((req, res) => {
			req.logout();
			res.redirect('/');
		});

	app.route('/profile')
		.get(isLoggedIn, (req, res) => profileC(req, res));

	app.route('/newpoll')	// NEW POLL ROUTE		-----------------
		.get(isLoggedIn, (req, res) => createHandler(req, res))
		.post(isLoggedIn,(req, res) => createPoll(req, res));

		app.route('/polls')
			.get((req, res) => res.redirect('/'));

		app.route('/polls/:id')// POLL ROUTE		-----------------
			.get((req, res) => getPoll(req, res))
			.post((req, res) => updatePoll(req, res));

		app.route('/polls/delete/:id')	// POLL ROUTE	FOR DELETE OPTION	-----------------
			.get(isLoggedIn, (req, res) => deletePoll(req, res));

		app.route('/mypolls')	// MYPOLL ROUTE		-----------------
		.get(isLoggedIn, (req, res) => findMyPolls(req, res));

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

		app.get('*', function(req, res){
			res.render('error404.ejs',{
				userLogged: req.isAuthenticated(),
				id: req.params.id
			});
		});
};

let isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) return next();
	else res.redirect('/');
}
