import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import IMG_3650 from './IMG_3650.JPG'

function LoginPage() {
  const history = useHistory();

  function resizeImg(img, newWidth, newHeight) {
    // Set the new width and height for the image
    img.width = newWidth;
    // img.height = newHeight;
  }

  return (
   //add a dialougue box of the ideals and guidlines that user need to agree to 
   <div>
      {/* add banner images */}
      <img src ={IMG_3650}  onLoad={(event) => resizeImg(event.target, 450)}/>
      <br/>
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
