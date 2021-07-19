import * as TYPES from "../types";
import axios from "axios";

export const apiUrl = "https://abcstudyonline.herokuapp.com";

export const ApiChangePassword =
  (accessToken, oldPassword, newPassword) => (dispatch, getStore) => {
    return axios
      .patch(
        apiUrl + "/auth/password",
        {
          oldPassword,
          newPassword,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.CHANGE_PASSWORD_SUCCESSED,
          });
        } else {
          dispatch({ type: TYPES.CHANGE_PASSWORD_FAILED });
        }
        console.log("res: ", response);
        return response;
      })
      .catch((error) => {
        console.log("change password Error: ", error);
        dispatch({ type: TYPES.CHANGE_PASSWORD_FAILED });
      });
  };
