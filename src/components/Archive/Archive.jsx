import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Archive (props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
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

  const viewPoster = (event) => {
    history.push('/viewPoster')
  }
  
  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    img.height = newHeight;
  }

  return (
    <div className="container">
      <h2>{heading}</h2>
      <h3>There will be images of posters</h3>

        {posterList.map(posters => {
          return(
            <div key={posters.id}>
              <img key={1} src={`images/${posters.poster_img}`} onLoad={(event) => resizeImg(event.target, 300, 300)} alt="Poster Image" ></img>
              <br/>  <br/>
              <button key={2} onClick={addContent} className="btn">ADD</button>
              <button key={3} onClick={viewPoster} className="btn">VIEW</button>
            </div>
          )
        })}
     
    </div>
  );
}

export default Archive;
