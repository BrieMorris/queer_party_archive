import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//Archive() posts all the poster img and allows user to navigate to acc content or view individual posters
function Archive (props) {
  
  const [heading, setHeading] = useState('ARCHIVE');        
  const history = useHistory();
  const dispatch = useDispatch();
  const posterList = useSelector(store => store.posterReducer.displayPoster);

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_POSTERS' });
}, []);
                                        
  const addContent = (event) => {
    history.push('/addContent')
  }

  //change poster.id
  // const viewPoster = (id) => {
  //   console.log('posters', posters);
  //   history.push(`/viewPoster/${id}`)
  // }

  const viewPoster = (posters) => {
    console.log('posters', posters);
    history.push(`/viewPoster/`+ posters) 
  }
  console.log('posterList', posterList);
  
  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    img.height = newHeight;
  }



  return (
    <div className="container">
      <h2>{heading}</h2>
        {console.log('poster list', posterList)}
        {posterList.map(posters => {
            return (
            <div key={posters.id}>
              {console.log('posters id', posters.id)}
              <img src={`images/${posters.poster_img}`} onLoad={(event) => resizeImg(event.target, 300, 300)} alt="Poster Image" ></img>
              <br/>  <br/>
              <button onClick={addContent} className="btn">ADD</button>
              {/* added .id */}
              <button  onClick={() => viewPoster(posters.id)} className="btn">VIEW</button>
            </div>
            )
        })}
     
    </div>
  );
}

export default Archive;
