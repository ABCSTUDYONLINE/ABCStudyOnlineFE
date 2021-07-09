import * as TYPES from "../types";

let initState = {
  isAuthenticated: false,
  userInfo: null,
  registerSuccess: false,
};

export function Authentication(prevState = initState, action) {
  console.log("Action: ", action);
  switch (action.type) {
    case TYPES.LOGIN_SUCCESSED:
      return { ...prevState, isAuthenticated: true };
    case TYPES.REGISTER_SUCCESSED:
      return { ...prevState, userInfo: action.payload, registerSuccess: true };
    default:
      return prevState;
  }
}
