import { SET_REDIRECT, REJECT_REDIRECT } from "../actions/actionTypes";

const initialState = {
  allowRedirect: false
};

const setReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REDIRECT:
      return {
        ...state,
        allowRedirect: true
      };
    case REJECT_REDIRECT:
      return {
        ...state,
        allowRedirect: false
      };
    default:
      return state;
  }
};

export default setReducer;
