import React, { useState } from 'react';
import {useSelector, useDispatch,} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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
  const viewContent = useSelector(store => store.posterReducer.viewPosterContent);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({ type: 'VIEW_POSTER' });
}, []);
  
  const toArchive = (event) => {
    history.push('/archive')
  }

  return (
    <div>
      <h2>{heading}</h2>
      <br/> <br/>
      <div key={user.id}>


      </div>
       <button onClick={toArchive} className="btn">Back</button>
    </div>
  );
}

export default ViewPoster;
