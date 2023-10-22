const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();

/**
 * GET route to view all poster content
 * first query there poster_content for a given poster
 * if there is poster content run query 2
 * if there is not poster content run query 3 (do not join)
 * these are mix between saga and router notes
 * 
 * or query paoster data - then query poster_content date 
 */


router.get('/', (req, res) => {
  const queryText = `SELECT * FROM posters;`

  pool.query(queryText)
   .then(result => {
    res.send(result.rows);
   })
   .catch(err => {
    console.log('ERROR; Get view poster content');
    res.sendStatus(500)
   })
});

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM poster_content;`

  pool.query(queryText)
   .then(result => {
    res.send(result.rows);
   })
   .catch(err => {
    console.log('ERROR; Get view poster content');
    res.sendStatus(500)
   })
});


//   const queryText = `SELECT 
//   p.user_id,
//   p.poster_img,
//   p.description,
//   p.date,
//   pc.images,
//   pc.memory
// FROM
//   posters p
// JOIN
//   poster_content pc ON p.id = pc.poster_id;`
/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   console.log(req.body);
//   const viewPoster = `INSERT INTO posters (user_id, poster_img, description, date)
//   VALUES (user_id_value, 'poster_img_value', 'description_value', 'date_value');`
// });

module.exports = router;