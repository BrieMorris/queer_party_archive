const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for all posters appearing in the Archive
 */
router.get('/', (req, res) => {
  const queryText = `SELECT `
  pool.query(queryText)
   .then(result => {
    res.send(result.rows);
   })
   .catch(err => {
    console.log('ERROR; Get get poster img');
    res.sendStatus(500)
   })
});

/**
 * POST 
 */
router.post('/', (req, res) => {
  console.log(req.body);
  const addContent = `INSERT INTO
  `
});

module.exports = router;
