/* Create index control object */
const indexCtrl = {};

/* Add methods to the object */
indexCtrl.renderIndex = (req, res) => {
  res.render('index');//.hbs
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');//.hbs
};

/* Export */
module.exports = indexCtrl;