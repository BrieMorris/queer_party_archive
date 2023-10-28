const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();

/**
 * GET route for all posters appearing in the Archive
 */
router.get('/', (req, res) => {
  const queryText = `SELECT id, poster_img FROM posters; `
  pool.query(queryText)
   .then(result => {
    res.send(result.rows);
   })
   .catch(err => {
    console.log('ERROR; Get get poster img', err);
    res.sendStatus(500)
   })
});

/**
 * POST 
 */
router.post('/', (req, res) => {
  console.log(req.body);
  const showInArchive = `
  INSERT INTO "posters" ("user_id", "poster_img", "description", "date")
  VALUES ($1, $2, $3, $4);`
});



module.exports = router;
