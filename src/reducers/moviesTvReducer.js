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
  START_FETCH,
  END_FETCH,
  CLEAR_RESULTS
} from "../actions/actionTypes";

const initialState = {
  genres: [],
  queries: [],
  movie: undefined,
  tv: undefined,
  error: false,
  loading: false,
  page: null,
  totalPage: null,
  totalResults: null
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
        error: false,
        genres: action.payload
      };
    case GET_TV_GENRES:
      return {
        ...state,
        error: false,
        genres: action.payload
      };
    case GET_MOVIES_BY_GENRE:
      return {
        ...state,
        error: false,
        queries: action.payload,
        page: action.page,
        totalPage: action.totalPage,
        totalResults: action.totalResults
      };

    case GET_TVS_BY_GENRE:
      return {
        ...state,
        error: false,
        queries: action.payload,
        page: action.page,
        totalPage: action.totalPage,
        totalResults: action.totalResults
      };

    case GET_MOVIE_LATEST:
      return {
        ...state,
        error: false,
        queries: action.payload,
        page: action.page,
        totalPage: action.totalPage,
        totalResults: action.totalResults
      };
    case GET_MOVIE_UPCOMING:
      return {
        ...state,
        error: false,
        queries: action.payload,
        page: action.page,
        totalPage: action.totalPage,
        totalResults: action.totalResults
      };
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        error: false,
        queries: action.payload,
        page: action.page,
        totalPage: action.totalPage,
        totalResults: action.totalResults
      };
    case GET_ON_AIR_TV_SHOWS:
      return {
        ...state,
        error: false,
        queries: action.payload,
        page: action.page,
        totalPage: action.totalPage,
        totalResults: action.totalResults
      };
    case GET_POPULAR_TV_SHOWS:
      return {
        ...state,
        error: false,
        queries: action.payload,
        page: action.page,
        totalPage: action.totalPage,
        totalResults: action.totalResults
      };
    case GET_TOP_RATED_SHOWS:
      return {
        ...state,
        error: false,
        queries: action.payload,
        page: action.page,
        totalPage: action.totalPage,
        totalResults: action.totalResults
      };
    case GET_SEARCH_MOVIES_TVS:
      return {
        ...state,
        error: false,
        queries: action.payload,
        page: action.page,
        totalPage: action.totalPage,
        totalResults: action.totalResults
      };
    case GET_MOVIE_INFO:
      return {
        ...state,
        error: false,
        movie: action.payload,
        tv: undefined
      };
    case GET_TV_INFO:
      return {
        ...state,
        error: false,
        tv: action.payload,
        movie: undefined
      };
    case GET_ERROR:
      return {
        ...state,
        error: true,
        loading: false
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
