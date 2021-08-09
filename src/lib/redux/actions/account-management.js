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
        if (response?.status === 200 && response?.data.data !== null) {
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

export const ApiUpdateAvatar =
  (accessToken, apiData) => (dispatch, getStore) => {
    return axios
      .put(apiUrl + "/auth/avatar", apiData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: TYPES.UPDATE_AVATAR_SUCCESSED });
        } else {
          dispatch({ type: TYPES.UPDATE_AVATAR_FAILED });
        }
        console.log("response avatar: ", response);
        return response;
      })
      .catch((error) => {
        console.log("UPDATE_AVATAR_FAILED: ", error);
        dispatch({ type: TYPES.UPDATE_AVATAR_FAILED });
      });
  };
