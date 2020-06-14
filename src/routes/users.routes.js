/* Require express.Router */
const { Router } = require('express');

/* Executes Router */
const router = Router();

/* Import notes controller */
const {
  renderSignUpForm,
  renderLoginForm,
  signup,
  login,
  logout
} = require('../controllers/users.controller');

/* Routes */
//Sing up
router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signup);
//Log in
router.get('/users/login', renderLoginForm);
router.post('/users/login', login);
//Log out
router.get('/users/logout', logout);
/* Export router */
module.exports = router;