const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {//isAuthenticated() passport.js function
    return next();
  }
  req.flash('error_msg', 'Not Authorized');
  res.redirect('/users/login');
};

module.exports = helpers;