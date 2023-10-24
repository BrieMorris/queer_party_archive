import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

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
      yield axios.post('/api/addPoster', action.payload);
      yield put({ type: 'ADD_POSTER', payload: action.payload });
    } catch (error) {
        console.log('error adding poster', error);
    }    
  }
  
  //saga function to add content to posters using db
  function* addPosterContent(action) {
    try {
      yield axios.post('/api/posterContent', action.payload);
      yield put({ type: 'ADD_POSTER_CONTENT', payload: action.payload });
    } catch (error) {
        console.log('error posting observation', error);
    }    
  }
  
  // saga function to view content of posters using db
  // first ask server if ther is poster_content
  function* viewPosterContent(action) {
    try {
      yield axios.get(`/api/viewContent/${action.payload.poster_id}`);
      yield put({ type: 'VIEW_POSTER_CONTENT', payload: action.payload });
      console.log('paylaod', action.payload);
    } catch (error) {
        console.log('error posting observation', error);
    }    
  }
  // function* viewPosterContent(action) {
  //   try {
  //     const response = yield axios.get(`/api/viewContent/${action.payload.poster_id}`);
  //     const data = response.data;
      
  //     // Check if the response contains the expected data structure
  //     if (data && data.content) {
  //       yield put({ type: 'VIEW_POSTER_CONTENT', payload: data.content });
  //     } else {
  //       // Handle the case where the response structure is unexpected
  //       yield put({ type: 'VIEW_POSTER_CONTENT_ERROR', payload: 'Unexpected response format' });
  //     }
  //   } catch (error) {
  //     // Dispatch an error action with a meaningful message
  //     yield put({ type: 'VIEW_POSTER_CONTENT_ERROR', payload: 'Error fetching poster content' });
  //     console.log('Error fetching poster content', error);
  //   }
  // }
  
 

  function* posterSaga() {
    yield takeEvery('FETCH_ALL_POSTERS', displayPoster);
    yield takeEvery('POSTER_ADD', addPosters);
    yield takeEvery('ADD_POSTER_INFO', addPosterContent);
    yield takeEvery('VIEW_POSTER', viewPosterContent);
  }
  
  export default posterSaga;