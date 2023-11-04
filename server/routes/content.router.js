const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//to post poster content 
router.post('/', (req, res) => {
  console.log(req.body);
  const queryText = `INSERT INTO "poster_content" ("user_id", "poster_id", "images", "memory")
  VALUES ($1, $2, $3, $4)
  `
  pool.query(queryText, [req.user.id, req.body.poster_id, req.body.photo, req.body.memory])
  .then(result => {
   res.sendStatus(201);
  })
  .catch(err => {
   console.log('ERROR; posting content', err);
   res.sendStatus(500)
  })

});

//to delete poster image
router.delete('/', (req, res) => {
  const queryText = `DELETE FROM poster_content
  WHERE id = $1;`
  //should this just be photo?
  pool.query(queryText, [req.user.id, req.body.poster_id, req.body.photo ])
  .then(result => {
    res.sendStatus(201);
   })
   .catch(err => {
    console.log('ERROR; deleting image', err);
    res.sendStatus(500)
   })
})


module.exports = router;
