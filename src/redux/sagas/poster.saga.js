import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

//saga function to retrieve observations from DB
function* displayPoster(action) {
    try {
        const posterResponse = yield axios.get(`/api/poster`);
        yield put({ type: 'SET_ALL_POSTERS', payload: posterResponse.data});
    } catch (error) {
        console.log(error);
    }
  }
  
  //saga function to add observation to DB
  function* addPosters(action) {
    try {
      yield axios.post('/api/addPoster', action.payload);
      yield put({ type: 'ADD_POSTER', payload: action.payload });
    } catch (error) {
        console.log('error adding poster', error);
    }    
  }
  
  //saga function to add observation to DB
  function* addPosterContent(action) {
    try {
      yield axios.post('/api/observation', action.payload);
      yield put({ type: 'FETCH_USER_OBSERVATIONS', payload: action.payload });
    } catch (error) {
        console.log('error posting observation', error);
    }    
  }
  
 

  function* posterSaga() {
    yield takeEvery('FETCH_USER_OBSERVATIONS', fetchUserObservations);
    yield takeEvery('ADD_NEW_OBSERVATION', addNewObservation);
    yield takeEvery('SEARCH_WIKI', searchWikipedia);
  }
  
  export default posterSaga;