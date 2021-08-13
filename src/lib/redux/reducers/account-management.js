import * as TYPES from "../types";

let initState = {
  changePasswordStatus: false,
  updateAvatarStatus: false,
  changeProfileStatus: false,
};

export function AccountManagement(prevState = initState, action) {
  console.log("Action: ", action);
  switch (action.type) {
    case TYPES.CHANGE_PASSWORD_SUCCESSED:
      return { ...prevState, changePasswordStatus: true };
    case TYPES.CHANGE_PASSWORD_FAILED:
      return { ...prevState, changePasswordStatus: false };
    case TYPES.UPDATE_AVATAR_SUCCESSED:
      return { ...prevState, updateAvatarStatus: true };
    case TYPES.UPDATE_AVATAR_FAILED:
      return { ...prevState, updateAvatarStatus: false };
    case TYPES.CHANGE_PROFILE_SUCCESSED:
      return { ...prevState, changeProfileStatus: true };
    case TYPES.CHANGE_PROFILE_FAILED:
      return { ...prevState, changeProfileStatus: false };
    default:
      return prevState;
  }
}
