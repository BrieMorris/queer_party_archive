import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddContent(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('You may add an image and a memory to this event poster.');
  const history = useHistory();
  
  const toArchive = (event) => {
    history.push('/archive')
  }

  return (
    <div>
      <h2>{heading}</h2>
      <h3>Add an image:</h3> 
      <h3>Remeber these are public. Please don't tell on yourself of your friends.</h3>
      <input type="text" placeholder="image url"/>
      <h3>Share a memory from the event:</h3>
      <input type="text" placeholder="add memory"/>
      <br/>  <br/>
      <button onClick={toArchive} className="btn">ADD</button>

    </div>
  );
}

export default AddContent;
