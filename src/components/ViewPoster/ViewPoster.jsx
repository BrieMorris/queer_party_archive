import React, { useState } from 'react';
import {useSelector, useDispatch,} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';


//ViewPoster allows user to view all the uploaded content for a specific poster
function ViewPoster(posters) {
  
  const history = useHistory();
  const [heading, setHeading] = useState('Queers have hopefully added images and memories to this event.');
  const dispatch = useDispatch();
  
  const [thisPoster, setThisPoster] = useState(
    {poster_id: 0, 
    poster_img: '',
    description: '',
    date: 0,
    memory: '',
    images: ''
  } );

  
  const poster = useSelector(store => store.posterReducer.viewPosterContent);
  console.log('POSTER', poster);
  console.log('POSTER', poster[0]);

  const {id} = useParams();
  console.log('use params', id);

  
  
  useEffect(() => {
    dispatch({ type: 'VIEW_POSTER', payload: id });
    setThisPoster({poster_id: poster[0].poster_id , 
      poster_img: poster[0].poster_img,
      description: poster[0].description,
      date: poster[0].date,
      memory: poster[0].memory,
      images: poster[0].images
    } )
    
}, []);

  
  const toArchive = (event) => {
    history.push('/archive')
  };

  console.log('this poster', thisPoster);

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    img.height = newHeight;
  }


  return (
    <div className="container">
      <h2>{heading}</h2>
      <br /> <br />
    {console.log('THIS poster', thisPoster)}
        <div key={thisPoster.id}>
          <img src={`images/${thisPoster.poster_img}`}  onLoad={(event) => resizeImg(event.target, 300, 300)}  alt={thisPoster.picture} />
          <h2>{thisPoster.description}</h2>
          <h3>{thisPoster.date}</h3>
          <br /><br />
          <h2>{thisPoster.memory}</h2>
          <img src={`images/${thisPoster.images}`} onLoad={(event) => resizeImg(event.target, 300, 300)}  alt={thisPoster.pictures} />
        </div>
  

      <button onClick={toArchive} className="btn">
        Back
      </button>
    </div>
  );
}

export default ViewPoster;