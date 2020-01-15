import { START_FETCH, END_FETCH } from "./actionTypes";

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
