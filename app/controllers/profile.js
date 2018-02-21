'use strict';

module.exports = (req, res) => {
  res.render('profile.ejs',{
    userLogged: req.isAuthenticated(),
    user: req.user
  });
};
