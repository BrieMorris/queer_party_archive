const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//get poster content
router.get('/:id', (req, res) => {
  console.log('params', req.params);
  let id = req.params.id;

  const queryText = `SELECT *
  FROM poster_content
  WHERE id = $1`;
console.log('queryText', queryText);
  pool.query(queryText, [id])

   .then(result => {
    res.send(result.rows[0]);
  //   console.log(result.rows);
   })
   .catch(err => {
    console.log('ERROR; Get view poster content', err);
    res.sendStatus(500)
   })
});


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

//to delete image connected to poster but not the poster itself
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

//put to edit poster memory 
router.put ('/:editId', (req,res) => {
  const queryText = `UPDATE poster_content
  SET memory = $1
  WHERE id = $2;`
  pool.query(queryText, [req.body.memory, req.params.editId])
  .then(result => {
    res.sendStatus(200)
  })
  .catch(err => {
    console.log('ERROR: editing memory', err);
    res.sendStatus(500)
  })
})


module.exports = router;
