import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import IMG_3655 from './IMG_3655.JPG'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#808080',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary, 
}));

//Archive() posts all the poster img and allows user to navigate to acc content or view individual posters
function Archive (props) {
  
  const [heading, setHeading] = useState('ARCHIVE');        
  const history = useHistory();
  const dispatch = useDispatch();
  const posterList = useSelector(store => store.posterReducer.displayPoster);

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_POSTERS' });
}, []);
                                        
  const addContent = (id) => {
    history.push('/addContent/' + id)
  }

  const viewPoster = (posters) => {
    console.log('posters', posters);
    history.push(`/viewPoster/`+ posters) 
  }
  console.log('posterList', posterList);
  
  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }



  return (
    <div className="container">
    
      <img src ={IMG_3655} onLoad={(event) => resizeImg(event.target, 350)} />
      <br/>  <br/>
      <h2> What you can do in the Archive:
      <ul> 
        <li>View All Posters</li>
        <li>View Poster's Content</li>
        <li>Add Content to Events you Attended</li>
      </ul>
      </h2>
      <br/>  <br/>
      <h1>{heading}</h1>
      <br/>  <br/>
        {console.log('poster list', posterList)}
        <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row" spacing={2}>
              
        {posterList.map(posters => {
            return (
            <div key={posters.id} >
              {console.log('posters id', posters.id)}
              
              <Grid item xs={10}>
                <Item>
              <img src={posters.poster_img} onLoad={(event) => resizeImg(event.target, 300)} alt="Poster Image" />

              <br/>  <br/>
              <button onClick={() => addContent(posters.id)} className="btn">ADD CONTENT</button>
              <button  onClick={() => viewPoster(posters.id)} className="btn">VIEW</button>
              <br/>  <br/>
              </Item>
            </Grid>
            </div>
            )
        })}
         </Grid>
          </Box>
    </div>
  );
}

export default Archive;
