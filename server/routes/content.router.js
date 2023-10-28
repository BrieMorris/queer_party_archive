const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET - i don't think I need this
 */
// router.get('/', (req, res) => {
//   const queryText = `SELECT `
//   pool.query(queryText)
//    .then(result => {
//     res.send(result.rows);
//    })
//    .catch(err => {
//     console.log('ERROR; Get get poster img');
//     res.sendStatus(500)
//    })
// });

/**
 * POST 
 */
router.post('/', (req, res) => {
  console.log(req.body);
  const addContent = `INSERT INTO "posters" ("user_id", "poster_img", "description", "date")
  VALUES ($1, $2, $3, $4)
  `
  res.send(201)
});

module.exports = router;
