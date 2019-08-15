import { GET_MOVIE_GENRES,  GET_TV_GENRES } from '../actions/actionTypes'

const initialState = {
  genres:[]
}

const movieTvReducer = (state=initialState, action) => {
  switch(action.type){
    case GET_MOVIE_GENRES:
    return {
      ...state,
      genres:action.payload
    }
    case GET_TV_GENRES:
    return {
      ...state,
      genres:action.payload
    }
    default:
    return state
  }
}

export default movieTvReducer