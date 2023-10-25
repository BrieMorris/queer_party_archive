import React, { useState } from 'react';
import {useSelector, useDispatch,} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';




// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ViewPoster(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();
  const [heading, setHeading] = useState('Queers have hopefully added images and memories to this event.');
  const dispatch = useDispatch();
  const poster = useSelector(store => store.posterReducer.viewPosterContent);
  console.log(poster);

  const {id} = useParams();
  console.log('use params', id);
  
  useEffect(() => {
    dispatch({ type: 'VIEW_POSTER' });
}, []);
  
  const toArchive = (event) => {
    history.push('/archive')
  };



  return (
    <div className="container">
      <h2>{heading}</h2>
      <br /> <br />

     
        <div key={poster.id}>
          <img src={poster.poster_img} alt={poster.picture} />
          <h2>{poster.description}</h2>
          <h3>{poster.date}</h3>
          <br /><br />
          <h2>{poster.memory}</h2>
          <img src={poster.images} alt={poster.pictures} />
        </div>
  

      <button onClick={toArchive} className="btn">
        Back
      </button>
    </div>
  );
}

export default ViewPoster;