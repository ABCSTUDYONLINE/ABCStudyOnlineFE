import * as TYPES from "../types";

let initState = {
  changePasswordStatus: false,
};

export function AccountManagement(prevState = initState, action) {
  console.log("Action: ", action);
  switch (action.type) {
    case TYPES.CHANGE_PASSWORD_SUCCESSED:
      return { ...prevState, changePasswordStatus: true };
    case TYPES.CHANGE_PASSWORD_FAILED:
      return { ...prevState, changePasswordStatus: false };
    default:
      return prevState;
  }
}
