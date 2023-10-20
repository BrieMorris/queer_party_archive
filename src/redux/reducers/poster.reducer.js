const displayPoster = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ALL_POSTERS':
      return action.payload;
    case 'UNSET_ALL_POSTERS':
      return {};
    default:
      return state;
  }
};

const addPoster = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POSTER':
      return action.payload;
    case 'UNADD_POSTER':
      return {};
    default:
      return state;
  }
};

//combine reducers
export default combineReducers({
  displayPoster,
  addPoster,
});


