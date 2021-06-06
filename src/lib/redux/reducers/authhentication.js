import * as TYPES from "../types";

export function Authentication(prevState = { isAuthenticated: false }, action) {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESSED:
      return { ...prevState, isAuthenticated: true };

    default:
      return prevState;
  }
}
