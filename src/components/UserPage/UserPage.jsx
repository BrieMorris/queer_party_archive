import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import IMG_3633 from './IMG_3633.jpeg'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();


  const toInfo = (event) => {
    history.push('/info')
  }

  const toMemorial = (event) => {
    history.push('/memorialMap')
  }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <img src ={IMG_3633}/>
      <br/><br/>
      <h2>What is the MN Queer Party Archive?</h2>
      <br/> <br/>
      <h3> The queer party is a space of joy, deliciousness  and debauchery. Identities, art, and community are made on loud dance floors, around the firepit, and in multidisciplinary performances. Many people don’t believe these spaces have always existed. This digital archive’s goal is to capture as much of the weird and queer community for us now and for the future queerdos to see we’ve always been and we always will be. </h3>
      <br/><br/><br/><br/><br/><br/>
      <button onClick={toInfo} className="btn">Developement Info</button>
      <br/><br/>
      <button onClick={toMemorial} className="btn">Memorial Map</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
