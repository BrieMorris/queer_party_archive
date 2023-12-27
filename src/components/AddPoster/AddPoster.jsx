import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import IMG_3643 from './IMG_3643.JPG'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



// AddPoster() allows user to upload poster & info to Archive
function AddPoster(props) {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const [image, setImage] = useState();
  const [description, setdescription] = useState('');

  const [date, setDate] = useState('');

  const onFileChange = async (event) => {
    // Access the selected file
    const fileToUpload = event.target.files[0];

    // Limit to specific file types.
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    // Check if the file is one of the allowed types.
    if (acceptedImageTypes.includes(fileToUpload.type)) {
      setImage(fileToUpload);
    } else {
      alert('Please select an image');
    }
  }
 


  // move this to css 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addPoster = (e) => {
    e.preventDefault();
    dispatch({ type: 'POSTER_ADD', payload: { description: description, date: date, poster_id:id }, fileToUpload: image, toArchive})
  } 

  const toArchive = (event) => {
    history.push('/archive')
  }

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }


  return (
    <div className="container">
      <h1>Add the Event Poster</h1>
      <img src ={IMG_3643} onLoad={(event) => resizeImg(event.target, 350)} />
        <br/>  <br/>
        
      <h3>Add Poster Image:</h3> 
      
      <form onSubmit = {addPoster}>
      <input  type="file" 
              accept="image/*" 
              onChange={onFileChange}
              placeholder="image url"/>
          <br/>
      <br/>  <br/>
    <h3>Description of Event</h3>
      <textarea onChange={(e) => setdescription(e.target.value)} type="text" placeholder="add description"/>
      <h3>Date of Event</h3>
      <input onChange={(e) => setDate(e.target.value)} type="text" placeholder="add date"/>
      <br/>  <br/>
      <div>
      <Button onClick={handleOpen}>SAVE POSTER</Button>
      <Modal
        open={open}
        onClose={handleClose}
        //is this what needs to be changed
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          CHECK before you add the poster:
          </Typography>
          {/* fix text in box - this should be doable once I have launched */}
          <Typography id="CHECK before you add the poster:" sx={{ mt: 2 }}>
            1.  I double checked this poster is NOT on the site yet!     
            2.  This party has been over for at least 24 hours.                               
            3.  Poster does NOT include perosnal info like an address or phone number.
          </Typography>
          <Button onClick={addPoster}>SAVE</Button>
          <Button onClick={handleClose}>CANCEL</Button>
        </Box>
      </Modal>
    </div>
    </form>
    </div>
  );

}

export default AddPoster;
