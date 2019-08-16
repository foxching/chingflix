import axios from "axios"
import {
  GET_MOVIE_GENRES,
  GET_TV_GENRES,
  START_FETCH,
  END_FETCH,
  CLEAR_RESULTS
} from "./actionTypes"

export const getMoviesGenres = () => {
  return async dispatch => {
    try {
      dispatch({ type: START_FETCH })
      await delay(2000)
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US"
      )
      dispatch({ type: GET_MOVIE_GENRES, payload: response.data.genres })
      dispatch({ type: END_FETCH })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getTvsGenres = () => {
  return async dispatch => {
    try {
      dispatch({ type: START_FETCH })
      await delay(2000)
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US"
      )
      dispatch({ type: GET_TV_GENRES, payload: response.data.genres })
      dispatch({ type: END_FETCH })
    } catch (error) {
      console.log(error)
    }
  }
}

export const clearResults = () => {
  return dispatch => {
    dispatch({ type: CLEAR_RESULTS })
  }
}

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
