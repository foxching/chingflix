import { GET_ERROR, START_FETCH, END_FETCH } from "../actions/actionTypes";

const initialState = {
  loading: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        loading: true
      };
    case END_FETCH:
      return {
        ...state,
        loading: false
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default asyncReducer;
