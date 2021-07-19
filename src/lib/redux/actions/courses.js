import * as TYPES from "../types";
import axios from "axios";

export const apiUrl = "https://abcstudyonline.herokuapp.com";

// export const getTodos = () => (dispatch, getStore) => {
//   return fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => {
//       dispatch({ type: TYPES.GET_TODOS, payload: json.slice(0, 20) });
//     });
// };

// export const getCurrentTodo = (id) => (dispatch, getStore) => {
//   return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     .then((response) => response.json())
//     .then((json) => {
//       dispatch({ type: TYPES.GET_CURRENT_TODO, payload: json });
//     });
// };

export const ApiGetTopNewCourses = (page, limit) => (dispatch, getStore) => {
  return axios
    .get(apiUrl + `/courses/sorts?type=newest&page=${page}&limit=${limit}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.GET_TOP_NEW_COURSE_SUCCESSED,
          payload: response.data,
        });
      } else {
        dispatch({ type: TYPES.GET_TOP_NEW_COURSE_FAILED });
      }
      console.log("RESPONSE: ", response);
    })
    .catch((error) => {
      console.log("TOP new courses error: ", error);
      dispatch({ type: TYPES.GET_TOP_NEW_COURSE_FAILED });
    });
};

export const ApiGetTopRegisterCourses =
  (page, limit) => (dispatch, getStore) => {
    return axios
      .get(apiUrl + `/courses/sorts?type=register&page=${page}&limit=${limit}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.GET_TOP_REGISTER_COURSE_SUCCESSED,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.GET_TOP_REGISTER_COURSE_FAILED });
        }
        console.log("RESPONSE: ", response);
      })
      .catch((error) => {
        console.log("TOP new courses error: ", error);
        dispatch({ type: TYPES.GET_TOP_REGISTER_COURSE_FAILED });
      });
  };

export const ApiGetCategories = (page, limit) => (dispatch, getStore) => {
  return axios
    .get(apiUrl + `/categories?page=${page}&limit=${limit}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.GET_CATEGORIES_SUCCESSED,
          payload: response.data,
        });
      } else {
        dispatch({ type: TYPES.GET_TOP_NEW_COURSE_FAILED });
      }
    })
    .catch((error) => {
      console.log("TOP categories error: ", error);
      dispatch({ type: TYPES.GET_TOP_NEW_COURSE_FAILED });
    });
};

export const ApiGetFavoriteCourses =
  (accessToken, page, limit) => (dispatch, getStore) => {
    return axios
      .get(apiUrl + `/courses/favorites?page=${page}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.GET_FAVORITE_COURSES_SUCCSEDD,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.GET_FAVORITE_COURSES_FAILED });
        }
      })
      .catch((error) => {
        console.log("catch favorites error: ", error);

        dispatch({ type: TYPES.GET_FAVORITE_COURSES_FAILED });
      });
  };
export const ApiAddFavoriteCourse =
  (accessToken, courseId) => (dispatch, getStore) => {
    return axios
      .post(
        apiUrl + "/courses/favorites",
        {
          courseId,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          dispatch({ type: TYPES.ADD_FAVORITE_COURSE_SUCCESSED });
        } else {
          dispatch({ type: TYPES.ADD_FAVORITE_COURSE_FAILED });
        }
        return response;
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: TYPES.ADD_FAVORITE_COURSE_FAILED });
      });
  };
  export const ApiRemoveFavoriteCourse =
  (accessToken, courseId) => (dispatch, getStore) => {
    return axios
      .delete(
        apiUrl + `/courses/favorites?courseId=${courseId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: TYPES.REMOVE_FAVORITE_COURSE_SUCCESSED });
        } else {
          dispatch({ type: TYPES.REMOVE_FAVORITE_COURSE_FAILED });
        }
        return response;
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: TYPES.REMOVE_FAVORITE_COURSE_FAILED });
      });
  };
