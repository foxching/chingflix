import {
  GET_MOVIE_GENRES,
  GET_TV_GENRES,
  START_FETCH,
  END_FETCH,
  CLEAR_RESULTS
} from "../actions/actionTypes"

const initialState = {
  genres: [],
  loading: false
}

const movieTvReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH: {
      return {
        ...state,
        loading: true
      }
    }
    case END_FETCH: {
      return {
        ...state,
        loading: false
      }
    }
    case GET_MOVIE_GENRES:
      return {
        ...state,
        genres: action.payload
      }
    case GET_TV_GENRES:
      return {
        ...state,
        genres: action.payload
      }
    case CLEAR_RESULTS:
      return {
        ...state,
        genres: []
      }
    default:
      return state
  }
}

export default movieTvReducer
