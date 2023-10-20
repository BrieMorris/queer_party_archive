import { combineReducers } from "redux";

const displayPoster = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_POSTERS':
      return action.payload;
    case 'UNSET_ALL_POSTERS':
      return [];
    default:
      return state;
  }
};

const addPoster = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POSTER':
      return action.payload;
    case 'UNADD_POSTER':
      return [];
    default:
      return state;
  }
};

const addPosterContent = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POSTER_CONTENT':
      return action.payload;
    case 'UNADD_POSTER_CONTENT':
      return [];
    default:
      return state;
  }
};

const viewPosterContent = (state = [], action) => {
  switch (action.type) {
    case 'VIEW_POSTER_CONTENT':
      return action.payload;
    case 'VIEW_POSTER_CONTENT':
      return [];
    default:
      return state;
  }
};

//combine reducers
export default combineReducers({
  displayPoster,
  addPoster,
  addPosterContent,
  viewPosterContent,
});


