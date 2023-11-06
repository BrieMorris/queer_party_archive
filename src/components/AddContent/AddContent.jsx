import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
import IMG_3645 from './IMG_3645.JPG'
import axios from 'axios';

//AddConent() will allow users to add content a specific poster
function AddContent(props) {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const [image, setImage] = useState();
  const [memory, setMemory] = useState('');

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
 
  const addContent = (e) => {
    e.preventDefault();
    if (id) {
      //edit poster
      dispatch({ type: 'EDIT_MEMORY', payload: {image, memory, id}, history })
    }else {
      //add poster content
    dispatch({ type: 'ADD_POSTER_INFO', payload: { memory: memory, poster_id:id }, fileToUpload: image, toArchive})
  }
  } 

  const toArchive = (event) => {
    history.push('/archive')
  }

  useEffect(() => {
    if (id) { //return false if id is undefined
      axios.get(`/api/content/${id}`).then(response => {
        const content = response.data;
        setImage(content.image);
        setMemory(content.memory)
      }) .catch(error => {
        console.log(error);
        alert('something went wrong in edit')
      })
    } //else do nothing
    
  }, [id]);

  //add on change to inputs - change into a form
  return (
    <div className="container">
    <h2>{id ? 'Edit Memory': 'Add to Poster'}</h2>
    <Link to= {`/edit${id}`}>edit</Link>
      <img src ={IMG_3645}/>
      <h3>Remeber this is a public archive. Please don't tell on yourself or your friends.</h3>
        <br/>  <br/>
      <h3>Add an image:</h3> 
      <form onSubmit = {addContent}>
      <input  type="file" 
              accept="image/*" 
              onChange={onFileChange}
              placeholder="image url"/>
          <br/>
      <br/>  <br/>
      <h3>Share a memory from the event:</h3>
    
      <textarea onChange={(e) => setMemory(e.target.value)} type="text" placeholder="add memory"/>
      <br/>  <br/>
      <button className="btn">ADD</button>
      </form>
    </div>
  );
}


export default AddContent;
