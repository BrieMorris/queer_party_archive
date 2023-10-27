import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//AddConent() will allow users to add content a specific poster
function AddContent(props) {
  
  const [heading, setHeading] = useState('You may add an image and a memory to this event poster.');
  const history = useHistory();
  const dispatch = useDispatch();

  const add = useSelector(store => store.posterReducer.addPosterContent);
  console.log('add', add);

  useEffect(() => {
    dispatch({ type: 'ADD_POSTER_INFO' });
}, []);
 
  
  const toArchive = (event) => {
    history.push('/archive')
  }

  return (
    <div>
      <h2>{heading}</h2>
      <h3>Remeber these are public. Please don't tell on yourself or your friends.</h3>
        <br/>  <br/>
      <h3>Add an image:</h3> 
      <input type="text" placeholder="image url"/>
      <br/>  <br/>
      <h3>Share a memory from the event:</h3>
      <input type="text" placeholder="add memory"/>
      <br/>  <br/>
      <button onClick={toArchive} className="btn">ADD</button>

    </div>
  );
}

export default AddContent;
