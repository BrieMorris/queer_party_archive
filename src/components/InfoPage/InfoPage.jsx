import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const store = useSelector((store) => store);
  const history = useHistory();
  const [heading, setHeading] = useState('Coding info on app add button on home screen');

  const toHome = (event) => {
    history.push('/login')
  }
  



  return (
    <div className="container">
      <h1>{heading}</h1>
      <br/>
      <button onClick={toHome} className="btn">Back</button>
    </div>
  );
}

export default InfoPage;
