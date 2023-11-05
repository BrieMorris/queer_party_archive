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

  const deleteImage = (poster) => {
    console.log('Poster in Delete', poster);
    //if time add evaluate that it is the same user here 
    dispatch({ type: 'DELETE_IMAGE', payload: { posterId: poster.id, poster: poster.posterId, id: id } });
  };

  const editMemory = (memoryId) => {
    console.log('Memory Edit', memoryId);
    //if time add evaluate that it is the same user here 
    dispatch({ type: 'EDIT_MEMORY', payload: { id: id, memoryId } });
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
          <br /><br /> <br />
          <h2>{thisPoster.memory}</h2> 
          <br />
          <button className="btn" onClick={() => deleteImage(thisPoster)} >delete</button>
          <button className="btn" onClick={() => editMemory(thisPoster.id)}  >edit</button>
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