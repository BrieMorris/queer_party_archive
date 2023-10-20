import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const toInfo = (event) => {
    history.push('/info')
  }


  return (
    <div className="container">
      <img></img>
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <h2>What is the MN Queer Party Archive? </h2>
      <button onClick={toInfo} className="btn">Developement Info</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
