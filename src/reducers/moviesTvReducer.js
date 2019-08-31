import {
  GET_MOVIE_GENRES,
  GET_TV_GENRES,
  GET_MOVIES_BY_GENRE,
  GET_TVS_BY_GENRE,
  GET_MOVIE_LATEST,
  GET_MOVIE_UPCOMING,
  START_FETCH,
  END_FETCH,
  CLEAR_RESULTS
} from "../actions/actionTypes";

const initialState = {
  genres: [],
  queries: [],
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
        queries: action.payload
      };

    case GET_TVS_BY_GENRE:
      return {
        ...state,
        queries: action.payload
      };

    case GET_MOVIE_LATEST:
      return {
        ...state,
        queries: action.payload
      };
    case GET_MOVIE_UPCOMING:
      return {
        ...state,
        queries: action.payload
      };
    case CLEAR_RESULTS:
      return {
        ...state,
        genres: [],
        queries: []
      };
    default:
      return state;
  }
};

export default movieTvReducer;
