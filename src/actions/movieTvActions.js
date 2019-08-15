import axios from 'axios'
import { GET_MOVIE_GENRES,  GET_TV_GENRES } from './actionTypes'

export const getMoviesGenres = () => {
  return (dispatch) => {
    axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US"
    )
    .then(res => {
      dispatch({
        type:GET_MOVIE_GENRES,
        payload:res.data.genres
      })
    });
  }
}


export const getTvsGenres = () => {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US"
      )
      .then(res => {
        dispatch({
          type:GET_TV_GENRES,
          payload:res.data.genres
        })
      });
  }
}