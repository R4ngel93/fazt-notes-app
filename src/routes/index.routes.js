/* Require express.Router */
const { Router } = require('express');

/* Executes Router */
const router = Router();

/* Import index controller */
const { renderIndex, renderAbout } = require('../controllers/index.controller');

/* Routing & Rendering */
router.get('/', renderIndex);
router.get('/about', renderAbout);

/* Export router */
module.exports = router;