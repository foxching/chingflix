import { GET_ERROR, START_FETCH, END_FETCH } from "./actionTypes";

export const asyncActionStarted = () => {
  return {
    type: START_FETCH
  };
};

export const asyncActionFinished = () => {
  return {
    type: END_FETCH
  };
};

export const asyncActionError = () => {
  return {
    type: GET_ERROR
  };
};
