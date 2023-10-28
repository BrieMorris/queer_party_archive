import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//AddConent() will allow users to add content a specific poster
function AddContent(props) {
  
  // const [heading, setHeading] = useState('You may add an image and a memory to this event poster.');
  const history = useHistory();
  const dispatch = useDispatch();
  const add = useSelector(store => store.posterReducer.addPosterContent);
  console.log('add', add);
  // double check this
  // const [images, setImages] = useState('');
  // const [memory, setMemory] = useState('');

  // const [contentData, setContentData]  = useState({
  //   images: images,
  //   memory: memory,
  // });

  const onFileChange = async (event) => {
    // Access the selected file
    const fileToUpload = event.target.files[0];

  //what is the paylload to call image data and content data onChnge
  useEffect(() => {
    const imageData = new FormData();
      imageData.append('file', fileToUpload);
      imageData.append('upload_preset', process.env.REACT_APP_PRESET);
    dispatch({ type: 'UPLOAD_IMAGE', payload: imageData }); 
   
    const contentData = new FormData();
      contentData.append('file', fileToUpload);
      contentData.append('upload_preset', process.env.REACT_APP_PRESET);
    dispatch({ type: 'UPLOAD_IMAGE', payload: contentData }); 

    setContentData({
      imageData: imageData,
      contentData: contentData,
    })
   
}, []);
 
  
  const toArchive = (event) => {
    history.push('/archive')
  }

  //add on change to inputs - change into a form
  return (
    <div className="container">
      {/* <h2>{heading}</h2> */}
      <h3>Remeber these are public. Please don't tell on yourself or your friends.</h3>
        <br/>  <br/>
      <h3>Add an image:</h3> 
      <form onSubmit = {setContentData}>
      <input  type="file" 
              accept="image/*" 
              onChange={onFileChange}
              placeholder="image url"/>
          <br/>
      {
          imagePath === '' ? (
            <p>Please select an image</p>
          ) : (
            <img style={{ maxWidth: '150px' }} src={imagePath} />
          )
        }
      <br/>  <br/>
      <h3>Share a memory from the event:</h3>
      <input type="text" placeholder="add memory"/>
      <br/>  <br/>
      <button onChange= {AddContent}  onClick={toArchive} className="btn">ADD</button>
      </form>
    </div>
  );
}
}

export default AddContent;
