const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



/**
 * POST for uploading image to cloudinary
 */
router.post('/', (req, res) => {
  console.log(req.body);
  const imageData = req.body
  let postUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
  axios.post(postUrl, imageData).then(response => {
    console.log('Success!', response);
    res.send(response.data.url)
  }).catch(error => {
    console.log('error', error);
    alert('Something went wrong');
  })
  
});

module.exports = router;
