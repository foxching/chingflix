import axios from 'axios';
import {
	GET_MOVIE_GENRES,
	GET_TV_GENRES,
	GET_MOVIES_BY_GENRE,
	GET_TVS_BY_GENRE,
	GET_MOVIE_LATEST,
	GET_MOVIE_UPCOMING,
	GET_TRENDING_MOVIES,
	GET_ON_AIR_TV_SHOWS,
	GET_POPULAR_TV_SHOWS,
	GET_TOP_RATED_SHOWS,
	GET_SEARCH_MOVIES_TVS,
	GET_MOVIE_INFO,
	GET_TV_INFO,
	GET_ERROR,
	CLEAR_RESULTS
} from './actionTypes';

import { asyncActionStarted, asyncActionFinished } from './asyncAction';

export const getMoviesGenres = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/genre/movie/list?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US'
			);
			dispatch({ type: GET_MOVIE_GENRES, payload: response.data.genres });
			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getTvsGenres = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/genre/tv/list?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US'
			);
			dispatch({ type: GET_TV_GENRES, payload: response.data.genres });
			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getMoviesbyGenre = (genreId, pageNum) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);

			const response = await axios.get(
				`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/discover/movie?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${pageNum}&with_genres=${genreId}`
			);

			dispatch({
				type: GET_MOVIES_BY_GENRE,
				payload: response.data.results,
				page: response.data.page,
				totalPage: response.data.total_pages,
				totalResults: response.data.total_results
			});
			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getTvsbyGenre = (genreId, pageNum) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/discover/tv?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&sort_by=popularity.desc&page=${pageNum}&timezone=America%2FNew_York&with_genres=${genreId}&include_null_first_air_dates=false`
			);

			dispatch({
				type: GET_TVS_BY_GENRE,
				payload: response.data.results,
				page: response.data.page,
				totalPage: response.data.total_pages,
				totalResults: response.data.total_results
			});
			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getLatestMovies = (pageNum) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/now_playing?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US,PH&page=${pageNum}&region=US`
			);

			dispatch({
				type: GET_MOVIE_LATEST,
				payload: response.data.results,
				page: response.data.page,
				totalPage: response.data.total_pages,
				totalResults: response.data.total_results
			});
			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};
export const getUpcomingMovies = (pageNum) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/upcoming?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&page=${pageNum}&region=US`
			);

			dispatch({
				type: GET_MOVIE_UPCOMING,
				payload: response.data.results,
				page: response.data.page,
				totalPage: response.data.total_pages,
				totalResults: response.data.total_results
			});
			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getTrendingMovies = (pageNum) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/trending/movie/week?api_key=d3de272397bb7105279e2c887f31f0bb&page=${pageNum}`
			);
			dispatch({
				type: GET_TRENDING_MOVIES,
				payload: response.data.results,
				page: response.data.page,
				totalPage: response.data.total_pages,
				totalResults: response.data.total_results
			});
			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getOnAirTvShows = (pageNum) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/tv/airing_today?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&page=${pageNum}`
			);

			dispatch({
				type: GET_ON_AIR_TV_SHOWS,
				payload: response.data.results,
				page: response.data.page,
				totalPage: response.data.total_pages,
				totalResults: response.data.total_results
			});
			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getPopularTvShows = (pageNum) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/tv/popular?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&page=${pageNum}`
			);

			dispatch({
				type: GET_POPULAR_TV_SHOWS,
				payload: response.data.results,
				page: response.data.page,
				totalPage: response.data.total_pages,
				totalResults: response.data.total_results
			});

			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getTopRatedShows = (pageNum) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://api.themoviedb.org/3/tv/top_rated?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&page=${pageNum}`
			);

			dispatch({
				type: GET_TOP_RATED_SHOWS,
				payload: response.data.results,
				page: response.data.page,
				totalPage: response.data.total_pages,
				totalResults: response.data.total_results
			});
			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getSearchMoviesTvs = (searchText, pageNum) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/multi?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&append_to_response=images&include_image_language=en,null&query=${searchText}&page=${pageNum}&include_adult=false`
			);

			dispatch({
				type: GET_SEARCH_MOVIES_TVS,
				payload: response.data.results,
				page: response.data.page,
				totalPage: response.data.total_pages,
				totalResults: response.data.total_results
			});

			dispatch(asyncActionFinished());
		} catch (error) {
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getMovieInfo = (movieId) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${movieId}?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&append_to_response=videos`
			);
			dispatch({
				type: GET_MOVIE_INFO,
				payload: response.data
			});
			dispatch(asyncActionFinished());
		} catch (error) {
			console.log(error);
			dispatch({ type: GET_ERROR });
		}
	};
};

export const getTvInfo = (tvId) => {
	return async (dispatch) => {
		try {
			dispatch({ type: CLEAR_RESULTS });
			dispatch(asyncActionStarted());
			await delay(1000);
			const response = await axios.get(
				`https://api.themoviedb.org/3/tv/${tvId}?api_key=d3de272397bb7105279e2c887f31f0bb`
			);
			dispatch({
				type: GET_TV_INFO,
				payload: response.data
			});
			dispatch(asyncActionFinished());
		} catch (error) {
			console.log(error);
			dispatch({ type: GET_ERROR });
		}
	};
};
const delay = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
