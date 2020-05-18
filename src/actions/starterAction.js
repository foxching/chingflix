import { CLEAR_RESULTS } from "./actionTypes";
import { asyncActionStarted, asyncActionFinished } from "./asyncAction";

export const startGetData = () => async dispatch => {
  dispatch({ type: CLEAR_RESULTS });
  dispatch(asyncActionStarted());
  await delay(1000);
};

export const finishGetDataGenres = (reqType, response) => dispatch => {
  dispatch({ type: reqType, payload: response.data.genres });
  dispatch(asyncActionFinished());
};

export const finishGetDataQuery = (reqType, response) => dispatch => {
  dispatch({
    type: reqType,
    payload: response.data.results,
    page: response.data.page,
    totalPage: response.data.total_pages,
    totalResults: response.data.total_results
  });
  dispatch(asyncActionFinished());
};

export const finishGetDataInfo = (reqType, response) => dispatch => {
  dispatch({ type: reqType, payload: response.data });
  dispatch(asyncActionFinished());
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
