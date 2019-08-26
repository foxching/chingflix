import {
  GET_MOVIE_GENRES,
  GET_TV_GENRES,
  GET_MOVIES_BY_GENRE,
  GET_TVS_BY_GENRE,
  START_FETCH,
  END_FETCH,
  CLEAR_RESULTS
} from "../actions/actionTypes";

const initialState = {
  genres: [],
  movies: [],
  loading: false
};

const movieTvReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH: {
      return {
        ...state,
        loading: true
      };
    }
    case END_FETCH: {
      return {
        ...state,
        loading: false
      };
    }
    case GET_MOVIE_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case GET_TV_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case GET_MOVIES_BY_GENRE:
      return {
        ...state,
        movies: action.payload
      };

    case GET_TVS_BY_GENRE:
      return {
        ...state
      };

    case CLEAR_RESULTS:
      return {
        ...state,
        genres: [],
        movies: []
      };
    default:
      return state;
  }
};

export default movieTvReducer;
