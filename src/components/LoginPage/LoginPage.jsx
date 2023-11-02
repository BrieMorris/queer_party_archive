import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
// import IMG_login from './IMG_login.jpeg'

function LoginPage() {
  const history = useHistory();

  return (
   //add a dialougue box of the ideals and guidlines that user need to agree to 
   <div>
      {/* add banner images */}
      {/* <img src ={IMG_login}/> */}
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
