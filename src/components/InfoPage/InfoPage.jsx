import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import IMG_4713 from './IMG_4713.JPG'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const store = useSelector((store) => store);
  const history = useHistory();
  const [heading, setHeading] = useState('Queer Party Archive Development');

  const toHome = (event) => {
    history.push('/login')
  }
  
  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }


  return (
    <div className="container">
       <img src ={IMG_4713} onLoad={(event) => resizeImg(event.target, 350)} />
      <h1>{heading}</h1>
      <h3>MN Queer Party Archive is a space for the queer community to archive their parties. The goal is to allow users to create the archive themselves with features that allow them to upload posters from queer events with poster image, description and event date. This application is not a social media tool. It is meant to archive queer community through the weird and wonderful parties that we have. It is not a museum space, instead it’s a community tool where users get to add and manage their own content.  
</h3>
    <h4>Technologies Used:
      <br/> - JavaScript
      <br/> - React
      <br/> - Redux
      <br/> - NodeJs
      <br/> - Express
      <br/> - PostgresSQL
      <br/> - Material-UI
      <br/> - Sagas
      <br/> - HTML5
      <br/> - CSS 3
      <br/> - Cloudinary
    </h4>
      <br/>
      <button onClick={toHome} className="btn">Back</button>
    </div>
  );
}

export default InfoPage;
