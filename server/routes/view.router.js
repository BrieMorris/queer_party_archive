const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();


//get poster content
router.get('/:id', (req, res) => {
  console.log('params', req.params);
  let id = req.params.id;

  const queryText = `SELECT *
  FROM posters
  FULL JOIN poster_content ON posters.id = poster_content.poster_id
  WHERE posters.id= $1`;
console.log('queryText', queryText);
  pool.query(queryText, [id])

   .then(result => {
    res.send(result.rows);
  //   console.log(result.rows);
   })
   .catch(err => {
    console.log('ERROR; Get view poster content', err);
    res.sendStatus(500)
   })
});



module.exports = router;