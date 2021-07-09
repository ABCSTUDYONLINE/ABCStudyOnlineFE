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
          console.log("Dang ky that bai");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const ApiSendEmail = (email) => (dispatch, getStore) => {
  return axios
    .post(apiUrl + "/auth/otp/send", {
      email,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
