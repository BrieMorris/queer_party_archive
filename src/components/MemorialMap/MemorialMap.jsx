import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import IMG_pedra from './IMG_pedra.jpg'
import IMG_marcella1 from './IMG_marcella1.jpg'

//
function MemorialMap(props) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('(Future Goal) Memorial Map: Queer spaces from our past.');
  const history = useHistory();

  const toHome = (event) => {
    history.push('/login')
  }

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }

  return (
    <div>
      <h1>{heading}</h1>
      <img src ={IMG_pedra} onLoad={(event) => resizeImg(event.target, 550)} />
      <img src ={IMG_marcella1} onLoad={(event) => resizeImg(event.target, 550)} />
      <br/> <br/>
      <button onClick={toHome} className="btn">Back</button>
    </div>
  );
}

export default MemorialMap;
