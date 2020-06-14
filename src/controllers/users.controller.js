/* Create users control object */
const usersCtrl = {};

/* Passport */
const passport = require('passport');

/* Require model */
const User = require('../models/User');
/*
 * Add methods to the object
 */
usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: 'Passwords do not match' });
  }
  if (password.length < 4) {
    errors.push({ text: 'Passwords must be at least 4 characters.' })
  }
  if (errors.length > 0) {
    res.render('users/signup', {
      errors,
      name,
      email
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash('error_msg', 'The email is already in use');
      res.redirect('/users/signup');
    } else {
      // Saving a New Use
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password)
      await newUser.save();
      req.flash('success_msg', 'You are registered');
      res.redirect('/users/login');
    }
  }
};

usersCtrl.renderLoginForm = (req, res) => {
  res.render('users/login');
};

usersCtrl.login = passport.authenticate('local', {
  successRedirect: '/notes',
  failureRedirect: '/users/login',
  failureFlash: true
});

usersCtrl.logout = (req, res) => {
  req.logout();
  req.flash('success_msg', 'Your are logged out now');
  res.redirect('/users/login');
}

/* Export */
module.exports = usersCtrl;