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

// needs saga and reducer 
//Get to add event poster
router.get('/:id', (req, res) => {
  const queryText = `SELECT * FROM posters WHERE id = $1; `
  pool.query(queryText, [req.params.id])
   .then(result => {
    res.send(result.rows[0]);
   })
   .catch(err => {
    console.log('ERROR; ', err);
    res.sendStatus(500)
   })
});

/**
 * POST to save event poster to db
 */
router.post('/', (req, res) => {
  console.log(req.body);
  const showInArchive = `
  INSERT INTO "posters" ("user_id", "poster_img", "description", "date")
  VALUES ($1, $2, $3, $4);`
});



module.exports = router;
