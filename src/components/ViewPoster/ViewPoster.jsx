import React, { useState } from 'react';
import {useSelector, useDispatch,} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';


//ViewPoster allows user to view all the uploaded content for a specific poster
function ViewPoster(posters) {
  
  const history = useHistory();
  const [heading, setHeading] = useState('View Poster Content:');
  const dispatch = useDispatch();
  

  //change this to poster content
  const poster = useSelector(store => store.posterReducer.viewPosterContent);

  const {id} = useParams();
  
  useEffect(() => {
    dispatch({ type: 'VIEW_POSTER', payload: id });
    }, [id]);

  
  const toArchive = (event) => {
    history.push('/archive')
  };

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }

  const deleteImage = (imageId) => {
    //if time add evaluate that it is the same user here 
    dispatch({ type: 'DELETE_IMAGE', payload: { posterId: id, imageId } });
  };


  return (
    <div className="container">
      <h1>{heading}</h1>
       <img src={`${poster[0].poster_img}`}  onLoad={(event) => resizeImg(event.target, 300)} 
        alt={poster[0].picture} />
       <h2>{poster[0].description}</h2>
      <br /> <br />
      {poster.map(thisPoster => (
        <div key={thisPoster.id}>
          <h3>{thisPoster.date}</h3>
          <br /><br />
          <img src={`${thisPoster.images}`} onLoad={(event) => resizeImg(event.target, 300)}  
          alt={thisPoster.pictures} />
          <br />
          {/* if time add hide show would evaluate if its the correct user */}
          <button className="btn" onClick={() => deleteImage(thisPoster.id)} >delete</button>
          <br /><br /> <br />
          <h2>{thisPoster.memory}</h2> 
          <br />
          <button className="btn">edit</button>
        </div>
      ))}
      <br/><br/><br/><br/>

      <button onClick={toArchive} className="btn">
       BACK TO ARCHIVE
      </button>
    </div>
  );
}

export default ViewPoster;