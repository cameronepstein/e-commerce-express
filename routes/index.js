const express = require('express');
const router = express.Router();
const products = require('./products');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'random e-commerce site' });
// });

// module.exports = router;
// ./routes/index.js
const users = require('./user')
const photos = require('./photos')

module.exports = (app) => {
  app.use('/users', users)
  app.use('/photos', photos)
  // etc..
}
