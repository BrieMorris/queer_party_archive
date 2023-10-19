import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// edit this to work for posters --worker Saga: will be fired on "LOGIN" actions
function* addPoster(action) {
  try {
    // clear any existing error on the login page
    yield put({ type: 'ADD_POSTER' });

    //do i need this
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.post('/api/user/login', action.payload, config);

    // after the user has logged in
    // get the user information from the server
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('Error with user login:', error);
    if (error.response.status === 401) {
      // The 401 is the error status sent from passport
      // if user isn't in the database or
      // if the username and password don't match in the database
      yield put({ type: 'LOGIN_FAILED' });
    } else {
      // Got an error that wasn't a 401
      // Could be anything, but most common cause is the server is not started
      yield put({ type: 'LOGIN_FAILED_NO_CODE' });
    }
  }
}

// local root saga for this page edit it to add poster info
function* posterSaga() {
  // yield takeLatest('LOGIN', loginUser);
  // yield takeLatest('LOGOUT', logoutUser);
}

export default posterSaga;