import React, { useState } from 'react';
import {useSelector, useDispatch,} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';




// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ViewPoster(posters) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
 
  const history = useHistory();
  const [heading, setHeading] = useState('Queers have hopefully added images and memories to this event.');
  const [thisPoster, setThisPoster] = useState(
    {id: 0, 
    poster_img: '',
    description: '',
    date: 0,
    memory: '',
    images: ''
  } );

  const dispatch = useDispatch();
  const poster = useSelector(store => store.posterReducer.viewPosterContent);
  console.log('POSTER', poster);
  console.log('POSTER', poster[0]);

  const {id} = useParams();
  console.log('use params', id);

  
  
  useEffect(() => {
    dispatch({ type: 'VIEW_POSTER', payload: id });
    setThisPoster({id: poster[0].poster_id , 
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



  return (
    <div className="container">
      <h2>{heading}</h2>
      <br /> <br />

        <div key={thisPoster.id}>
          <img src={thisPoster.poster_img} alt={thisPoster.picture} />
          <h2>{thisPoster.description}</h2>
          <h3>{thisPoster.date}</h3>
          <br /><br />
          <h2>{thisPoster.memory}</h2>
          <img src={thisPoster.images} alt={thisPoster.pictures} />
        </div>
  

      <button onClick={toArchive} className="btn">
        Back
      </button>
    </div>
  );
}

export default ViewPoster;