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
  const [heading, setHeading] = useState('Queer Party Archive Development');

  const toHome = (event) => {
    history.push('/login')
  }
  



  return (
    <div className="container">
      <h1>{heading}</h1>
      <h3>MN Queer Party Archive is a space for the MN queer community to archive their parties.  The goal is to allow users to create the archive by allowing them to upload posters from queer events with poster image, description and event date.This application is not a social media tool. It is meant to archive queer community through the weird and wonderful parties that we have. It is not a museum space, instead it’s a community tool where users get to add and manage their own content.  
</h3>
      <br/>
      <button onClick={toHome} className="btn">Back</button>
    </div>
  );
}

export default InfoPage;
