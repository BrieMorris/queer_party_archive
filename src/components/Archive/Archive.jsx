import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Archive (props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
 
  const [heading, setHeading] = useState('ARCHIVE');        
  const history = useHistory();
  const dispatch = useDispatch();
  const posterList = useSelector(store => store.posterReducer.displayPoster);
  console.log(posterList);



  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_POSTERS' });
}, []);
                                        
  const addContent = (event) => {
    history.push('/addContent')
  }

  //change poster.id
  const viewPoster = (posters) => {
    console.log('posters', posters);
    history.push(`/viewPoster${posters.id}`)
    
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
              <button  onClick={() => viewPoster(posters)} className="btn">VIEW</button>
            </div>
            )
        })}
     
    </div>
  );
}

export default Archive;
