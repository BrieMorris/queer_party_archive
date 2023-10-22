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
  const dispatch = useDispatch();
  const viewContent = useSelector(store => store.posterReducer.viewPosterContent);
  console.log(viewContent);
  
  useEffect(() => {
    dispatch({ type: 'VIEW_POSTER' });
}, []);
  
  const toArchive = (event) => {
    history.push('/archive')
  };



  return (
    <div className="container">
      <h2>{heading}</h2>
      <br/> <br/>
     
    {viewContent.map((viewContent) => {
        return(
          <div key={posters.content}>
            <img src={viewContent.poster_img} alt={viewContent.picture}/>
            <h2>{viewContent.description}</h2>
            <h3>{viewContent.date}</h3>
            <br/><br/>
            <h2>{viewContent.memory}</h2>
            <img src={viewContent.images} alt={viewContent.pictures}/>

          </div>
        
        );     
    
        <div>
        <button onClick={toArchive} className="btn">Back</button>
        </div>
    })};

      
 


export default ViewPoster;
