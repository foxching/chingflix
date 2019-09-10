import { SET_REDIRECT, REJECT_REDIRECT } from "./actionTypes";

export const setRedirect = () => {
  return {
    type: SET_REDIRECT
  };
};

export const rejectRedirect = () => {
  return {
    type: REJECT_REDIRECT
  };
};
