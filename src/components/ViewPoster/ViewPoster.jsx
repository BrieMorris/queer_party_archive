import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ViewPoster(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const history = useHistory();
  const [heading, setHeading] = useState('Queers have hopefully added images and memories to this event.');

  return (
    <div>
      <h2>{heading}</h2>
      {/* All of these will need to be pulled from
       posters table and poster_content table
          Poster Image
          Poster Description
          Poster Date
          Poster Pictures
          Post Memories
       */}
    </div>
  );
}

export default ViewPoster;
