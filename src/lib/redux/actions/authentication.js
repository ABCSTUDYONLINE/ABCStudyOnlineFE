import * as TYPES from "../types";
import axios from "axios";

export const apiUrl = "https://abcstudyonline.herokuapp.com";

export const ApiRegister =
  (firstName, lastName, username, password, email, phoneNumber, address) =>
  (dispatch, getStore) => {
    return axios
      .post(apiUrl + "/auth/register", {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        role: "student",
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch({ type: TYPES.REGISTER_SUCCESSED, payload: response.data });
        } else {
          dispatch({ type: TYPES.REGISTER_FAILED });
        }
        return response;
      })
      .catch((error) => {
        dispatch({ type: TYPES.REGISTER_FAILED });
        console.log(error);
      });
  };

export const ApiSendEmail = (email) => (dispatch, getStore) => {
  return axios
    .post(apiUrl + "/auth/otp/send", {
      email,
    })
    .then((response) => {
      if (response.status === 201) {
        console.log(response);
        dispatch({ type: TYPES.SEND_EMAIL_SUCCESSED });
      } else {
        dispatch({ type: TYPES.SEND_EMAIL_FAILED });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: TYPES.SEND_EMAIL_FAILED });
    });
};

export const ApiConfirmOtpEmail = (email, code) => (dispatch, getStore) => {
  return axios
    .post(apiUrl + "/auth/otp/confirm", {
      email,
      code,
    })
    .then((response) => {
      if (response.status === 201) {
        console.log("Otp confirm: ", response);
        dispatch({ type: TYPES.CONFIRM_OTP_EMAIL_SUCCESSED });
      } else {
        dispatch({ type: TYPES.CONFIRM_OTP_EMAIL_FAILED });
      }
      return response;
    })
    .catch((error) => {
      console.log("Otp confirm Error: ", error);
      dispatch({ type: TYPES.CONFIRM_OTP_EMAIL_FAILED });
    });
};
export const ApiLogin = (username, password) => (dispatch, getStore) => {
  return axios
    .post(apiUrl + "/auth/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.status === 201) {
        dispatch({ type: TYPES.LOGIN_SUCCESSED, payload: response.data });
      } else {
        dispatch({ type: TYPES.LOGIN_FAILED });
      }
      return response;
    })
    .catch((error) => {
      console.log("Login Error: ", error);
      dispatch({ type: TYPES.LOGIN_FAILED });
    });
};
export const ApiUsersMe = (accessToken) => (dispatch, getStore) => {
  return axios
    .get(apiUrl + "/users/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.GET_USERINFO_SUCCESSED,
          payload: response.data,
        });
      } else {
        dispatch({ type: TYPES.GET_USERINFO_FAILED });
      }
      return response;
    })
    .catch((error) => {
      console.log("Get userinfo Error: ", error);
      dispatch({ type: TYPES.GET_USERINFO_FAILED });
    });
};

export const ApiForgetPasswordSendEmail =
  (username) => (dispatch, getStore) => {
    return axios
      .post(apiUrl + "/auth/otp/forget/send", {
        username,
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch({
            type: TYPES.FORGET_PASSWORD_SEND_EMAIL_SUCCESSED,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.FORGET_PASSWORD_SEND_EMAIL_FAILED });
        }
        return response;
      })
      .catch((error) => {
        console.log("send Otp Error: ", error);
        dispatch({ type: TYPES.FORGET_PASSWORD_SEND_EMAIL_FAILED });
      });
  };
export const ApiForgetPasswordConfirmOtpEmail =
  (username, code) => (dispatch, getStore) => {
    return axios
      .post(apiUrl + "/auth/otp/forget/confirm", {
        username,
        code,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Otp confirm: ", response);
          dispatch({ type: TYPES.CONFIRM_OTP_EMAIL_SUCCESSED });
        } else {
          dispatch({ type: TYPES.CONFIRM_OTP_EMAIL_FAILED });
        }
        return response;
      })
      .catch((error) => {
        console.log("Otp confirm Error: ", error);
        dispatch({ type: TYPES.CONFIRM_OTP_EMAIL_FAILED });
      });
  };

export const ApiForgetPasswordUpdateNewPassword =
  (username, newPassword) => (dispatch, getStore) => {
    return axios
      .patch(apiUrl + "/auth/forget/password", {
        username,
        newPassword,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.FORGET_PASSWORD_UPDATE_NEW_PASSWORD_SUCCESSED,
          });
        } else {
          dispatch({ type: TYPES.FORGET_PASSWORD_UPDATE_NEW_PASSWORD_FAILED });
        }
        console.log("res: ", response);
        return response;
      })
      .catch((error) => {
        console.log("update password Error: ", error);
        dispatch({ type: TYPES.FORGET_PASSWORD_UPDATE_NEW_PASSWORD_FAILED });
      });
  };

