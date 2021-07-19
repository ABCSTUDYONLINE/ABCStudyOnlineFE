import * as TYPES from "../types";

let initState = {
  userInfo: null,
  accessToken: "",
  loginStatus: false,
  registerStatus: false,
  registerLoadingStatus: false,
  sendEmailStatus: false,
  confirmOtpEmailStatus: false,
  getUserInfoStatus: false,
  forgetPasswordSendEmailStatus: false,
  forgetPasswordUpdateNewPasswordStatus: false,
};

export function Authentication(prevState = initState, action) {
  console.log("Action: ", action);
  switch (action.type) {
    case TYPES.LOGIN_SUCCESSED:
      return {
        ...prevState,
        loginStatus: true,
        accessToken: action.payload.access_token,
      };
    case TYPES.LOGIN_FAILED:
      return { ...prevState, loginStatus: false };
    case TYPES.REGISTER_SUCCESSED:
      return { ...prevState, userInfo: action.payload, registerStatus: true };
    case TYPES.REGISTER_FAILED:
      return { ...prevState, registerStatus: false };
    case TYPES.SEND_EMAIL_SUCCESSED:
      return { ...prevState, sendEmailStatus: true };
    case TYPES.SEND_EMAIL_FAILED:
      return { ...prevState, sendEmailStatus: false };
    case TYPES.CONFIRM_OTP_EMAIL_SUCCESSED:
      return { ...prevState, confirmOtpEmailStatus: true };
    case TYPES.CONFIRM_OTP_EMAIL_FAILED:
      return { ...prevState, confirmOtpEmailStatus: false };
    case TYPES.GET_USERINFO_SUCCESSED:
      return {
        ...prevState,
        getUserInfoStatus: true,
        userInfo: action.payload,
      };
    case TYPES.GET_USERINFO_FAILED:
      return { ...prevState, getUserInfoStatus: false };
    case TYPES.FORGET_PASSWORD_SEND_EMAIL_SUCCESSED:
      return { ...prevState, forgetPasswordSendEmailStatus: true };
    case TYPES.FORGET_PASSWORD_SEND_EMAIL_FAILED:
      return { ...prevState, forgetPasswordSendEmailStatus: false };
    case TYPES.FORGET_PASSWORD_UPDATE_NEW_PASSWORD_SUCCESSED:
      return { ...prevState, forgetPasswordUpdateNewPasswordStatus: true };
    case TYPES.FORGET_PASSWORD_UPDATE_NEW_PASSWORD_FAILED:
      return { ...prevState, forgetPasswordUpdateNewPasswordStatus: false };
    case TYPES.LOGOUT:
      console.log("lkllkl");
      return {
        ...prevState,
        userInfo: null,
        accessToken: "",
        loginStatus: false,
      };
    default:
      return prevState;
  }
}
