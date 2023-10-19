import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddPoster(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  const history = useHistory();
  const poster = useSelector((store) => store.user);

  const toArchive = (event) => {
    history.push('/info')
  }

  return (
    <div className="container">
      <h1>Add the Event Poster</h1>
      {/* make the h2 a dialogue box check list */}
      <h2>CHECK before you are the poster:
        <br></br>
        <ul>I double checked this poster id NOT on the site yet!</ul>
        <ul>This party has been over for at least 24 hours.</ul>
        <ul>Poster does NOT include perosnal info like an address or phone number.</ul>
      </h2>
      
      <h2>Add Poster</h2>
      <input type="text" placeholder="add poster"/>

      <h3>Description of Event</h3>
      <input type="text" placeholder="add description"/>

      <h3>Date of Event</h3>
      <input type="text" placeholder="event date"/>

      {/* store to posters database & go back to archive page */}
      {/* <button onClick={AddPoster} >Next</button> */}
    </div>
  );
}

export default AddPoster;
