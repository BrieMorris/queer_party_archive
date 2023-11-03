import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import ArchiveIMG from './ArchiveIMG.jpeg'

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
      <h1>{heading}</h1>
      {/* <img src ={ArchiveIMG}/> */}

        {console.log('poster list', posterList)}
        {posterList.map(posters => {
            return (
            <div key={posters.id}>
              {console.log('posters id', posters.id)}
              <img src={posters.poster_img} onLoad={(event) => resizeImg(event.target, 300)} alt="Poster Image" />
              <br/>  <br/>
              <button onClick={() => addContent(posters.id)} className="btn">ADD CONTENT</button>
              {/* added .id */}
              <button  onClick={() => viewPoster(posters.id)} className="btn">VIEW</button>
              <br/>  <br/>
            </div>
            )
        })}
     
    </div>
  );
}

export default Archive;
