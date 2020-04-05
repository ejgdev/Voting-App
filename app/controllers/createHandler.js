module.exports = (req, res) => {
  res.render('newpoll.ejs', {
    userLogged: req.isAuthenticated(),
    user: req.user,
  });
};
