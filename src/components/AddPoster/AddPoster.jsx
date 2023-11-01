import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';


// AddPoster() allows user to upload poster & info to Archive
function AddPoster(props) {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const [image, setImage] = useState();
  const [description, setdescription] = useState('');

  const [date, setDate] = useState('');

  const onFileChange = async (event) => {
    // Access the selected file
    const fileToUpload = event.target.files[0];

    // Limit to specific file types.
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    // Check if the file is one of the allowed types.
    if (acceptedImageTypes.includes(fileToUpload.type)) {
      setImage(fileToUpload);
    } else {
      alert('Please select an image');
    }
  }
 
  const addPoster = (e) => {
    e.preventDefault();
    dispatch({ type: 'POSTER_ADD', payload: { description: description, date: date, poster_id:id }, fileToUpload: image, toArchive})
  } 

  const toArchive = (event) => {
    history.push('/archive')
  }

  return (
    <div className="container">
      <h1>Add the Event Poster</h1>
      {/* make the h2 a dialogue box check list */}
      <h2>CHECK before you add the poster:
        <br></br>
        <ul>I double checked this poster id NOT on the site yet!</ul>
        <ul>This party has been over for at least 24 hours.</ul>
        <ul>Poster does NOT include perosnal info like an address or phone number.</ul>
      </h2>
        <br/>  <br/>
      <h3>Add Poster Image:</h3> 
      <form onSubmit = {addPoster}>
      <input  type="file" 
              accept="image/*" 
              onChange={onFileChange}
              placeholder="image url"/>
          <br/>
      <br/>  <br/>
      <h3>Description of Event</h3>
      <input onChange={(e) => setdescription(e.target.value)} type="text" placeholder="add description"/>
      <h3>Date of Event</h3>
      <input onChange={(e) => setDate(e.target.value)} type="text" placeholder="add date"/>
      <br/>  <br/>
      <button className="btn">ADD POSTER</button>
      </form>
    </div>
  );

  // return (
  //   <div className="container">
      // <h1>Add the Event Poster</h1>
      // {/* make the h2 a dialogue box check list */}
      // <h2>CHECK before you add the poster:
      //   <br></br>
      //   <ul>I double checked this poster id NOT on the site yet!</ul>
      //   <ul>This party has been over for at least 24 hours.</ul>
      //   <ul>Poster does NOT include perosnal info like an address or phone number.</ul>
      // </h2>
      
  //     <h2>Add Poster</h2>
  //     <input type="text" placeholder="poster image url"/>

  //     <h3>Description of Event</h3>
  //     <input type="text" placeholder="add description"/>

  //     <h3>Date of Event</h3>
  //     <input type="text" placeholder="event date"/>
  //     <br/> <br/>
  //     {/* store to posters database & go back to archive page */}
  //     <button onClick={toArchive} className="btn">ADD</button>
  //   </div>
  // );
}

export default AddPoster;
