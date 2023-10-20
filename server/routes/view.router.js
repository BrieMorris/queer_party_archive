const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();

/**
 * GET route to view all poster content
 */
router.get('/', (req, res) => {
  const queryText = ` `
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
 * POST route template
 */
router.post('/', (req, res) => {
  console.log(req.body);
  const showInArchive = `
 ;`
});

module.exports = router;