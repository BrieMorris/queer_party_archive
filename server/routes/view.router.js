const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();



//change to not show id twice 
router.get('/', (req, res) => {
  console.log(req.body);
  const queryText = `SELECT *
  FROM posters
  FULL JOIN poster_content ON posters.id = poster_content.poster_id
  WHERE id=$1;`
console.log('queryText', queryText);
const id = req.body.id 
console.log('req', req.data.id);
  pool.query(queryText, id )

   .then(result => {
    res.send(result.rows);
    console.log(result.rows);
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