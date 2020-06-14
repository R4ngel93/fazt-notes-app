/* Require dotenv package */
require('dotenv').config();

/* Require color */
require('colors');

/* Require Database */
require('./database/database');

/* Import express app */
const app = require('./server');

/* Listening port 3000 */
app.listen(app.get('port'), () => {
  console.log(`[Node.js] server on port [${app.get('port')}] [\u2713]`.blue.bold);
});