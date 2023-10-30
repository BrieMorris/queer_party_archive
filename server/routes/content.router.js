const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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

module.exports = router;
