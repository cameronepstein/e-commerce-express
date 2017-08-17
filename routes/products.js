'use strict'
const Router = ('express-promise-router');
const db = require('../db');

/*
create a new express-promise-router
this has the same API as the normal express router except
it allows you to use async functions as route handlers
*/
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router;

// Get request to the /:id route
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id])
  res.send(rows[0])
})

router.get('/cool/', function(req, res) {
  res.send('youre so cool');
});

module.exports = router;
