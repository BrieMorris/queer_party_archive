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
router.delete('/:id', (req, res) => {
  let id = req.params.id
  const queryText = `DELETE FROM poster_content WHERE id = $1;`
  pool.query(queryText, [id])
  .then(result => {
    res.sendStatus(201);
   })
   .catch(err => {
    console.log('ERROR: deleting image', err);
    res.sendStatus(500)
   })
})

//to edit poster memory 
router.put ('/:id', (req,res) => {
  const queryText = ``
  pool.query(queryText, [id])
  .then(result => {
    res.sendStatus(200)
  })
  .catch(err => {
    console.log('ERROR: editing memory', err);
    res.sendStatus(500)
  })
})


module.exports = router;
