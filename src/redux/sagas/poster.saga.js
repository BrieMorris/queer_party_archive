import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { useDispatch } from 'react-redux';



//saga function to diplay posters in archive using db
function* displayPoster(action) {
    try {
        const posterResponse = 
        yield axios.get(`/api/poster`);
        yield put({ type: 'SET_ALL_POSTERS', payload: posterResponse.data});
    } catch (error) {
        console.log(error);
    }
  }
  
  //saga function to add add posters to be displayed in archive using db
  function* addPosters(action) {
    try { 
      const formData = new FormData();
      formData.append('file', action.fileToUpload);
      formData.append('upload_preset', process.env.REACT_APP_PRESET);
      let postUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
      const response = yield axios.post(postUrl, formData);
      yield axios.post('/api/poster', { ...action.payload, photo: response.data.secure_url});
      action.toArchive()
  } catch (error) {
      console.log('error posting observation', error);
  }     
       
  }
  
  // saga to add poster content to specific posters 
  function* addPosterContent(action){
    try {
      const formData = new FormData();
        formData.append('file', action.fileToUpload);
        formData.append('upload_preset', process.env.REACT_APP_PRESET);
        let postUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
        const response = yield axios.post(postUrl, formData);
        yield axios.post('/api/content', { ...action.payload, photo: response.data.secure_url});
        action.toArchive()
    } catch (error) {
        console.log('error posting observation', error);
    }     
  }

  
  // saga function to view content of posters using db
  function* viewPosterContent(action) {
    console.log('action', action.payload);
    try {
      const viewResponse =
      yield axios.get('/api/viewContent/'+ action.payload);
      yield put({ type: 'VIEW_POSTER_CONTENT', payload: viewResponse.data });
      console.log('viewResponse', viewResponse.data);
    } catch (error) {
        console.log('error posting observation', error);
    }    
  }

  // saga function to delete images -- finish editing
  function* deleteImage(action) {
    // const dispatch = useDispatch();
    console.log('action', action.payload);
    try {
      const deletePic = 
      yield axios.delete('/api/content/'+ action.payload.posterId);
      yield put({ type: 'VIEW_POSTER', payload: action.payload.id });
      console.log('deletePic', deletePic.data);
   
    } catch (error) {
        console.log('error deleting image', error);
    }    
  }

// axios put for edit 

function* editMemory(action) {
  console.log('action', action.payload);
  try {
    const editMemory = 
    yield axios.put(`/api/content/${action.payload.memoryId}`, action.payload );
    if (action.history) {
      action.history.goBack();
    }
    // yield put({ type: 'VIEW_POSTER', payload: action.payload.id });
    console.log('editMemory', editMemory.data);
  } catch (error) {
      console.log('error editing memory', error);
  }    
}
  
  
 

  function* posterSaga() {
    yield takeEvery('FETCH_ALL_POSTERS', displayPoster);
    yield takeEvery('POSTER_ADD', addPosters);
    yield takeEvery('ADD_POSTER_INFO', addPosterContent);
    yield takeEvery('VIEW_POSTER', viewPosterContent);
    yield takeEvery('DELETE_IMAGE', deleteImage);
    yield takeEvery('EDIT_MEMORY', editMemory);
  }
  
  export default posterSaga;