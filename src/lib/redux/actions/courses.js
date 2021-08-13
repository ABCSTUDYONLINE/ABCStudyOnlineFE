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
      return response;
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

export const ApiGetTopRateInWeek = (page, limit) => (dispatch, getStore) => {
  return axios
    .get(apiUrl + `/courses/sorts?type=rateInWeek&page=${page}&limit=${limit}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.GET_TOP_RATE_IN_WEEK_SUCCESSED,
          payload: response.data,
        });
      } else {
        dispatch({ type: TYPES.GET_TOP_RATE_IN_WEEK_FAILED });
      }
      console.log("RESPONSE: ", response);
    })
    .catch((error) => {
      console.log("TOP new courses error: ", error);
      dispatch({ type: TYPES.GET_TOP_RATE_IN_WEEK_FAILED });
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
        return response;
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
  (accessToken, favoriteId) => (dispatch, getStore) => {
    return axios
      .delete(apiUrl + `/courses/favorites?favoriteId=${favoriteId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
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

export const ApiGetCourseDetail = (courseId) => (dispatch, getStore) => {
  return axios
    .get(apiUrl + `/courses/detail?courseId=${courseId}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.GET_COURSE_DETAIL_SUCCSED,
          payload: response.data,
        });
      } else {
        dispatch({ type: TYPES.GET_COURSE_DETAIL_FAILED });
      }
      return response;
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: TYPES.GET_COURSE_DETAIL_FAILED });
    });
};

export const ApiAddCourseToCart =
  (accessToken, courseId) => (dispatch, getStore) => {
    return axios
      .post(
        apiUrl + "/learn",
        {
          courseId,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
        if (response.data.data && response.status === 201) {
          dispatch({ type: TYPES.ADD_COURSE_TO_CART_SUCCESSED });
        } else {
          dispatch({ type: TYPES.ADD_COURSE_TO_CART_FAILED });
        }
        console.log("add cart ", response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: TYPES.ADD_COURSE_TO_CART_FAILED });
      });
  };
export const ApiRemoveCourseFromCart =
  (accessToken, courseId) => (dispatch, getStore) => {
    return axios
      .delete(apiUrl + `/learn?learnId=${courseId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: TYPES.REMOVE_COURSE_FROM_CART_SUCCESSED });
        } else {
          dispatch({ type: TYPES.REMOVE_COURSE_FROM_CART_FAILED });
        }
        console.log("remove cart ", response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: TYPES.REMOVE_COURSE_FROM_CART_FAILED });
      });
  };

export const ApiGetCoursesFromCart =
  (accessToken, status, page, limit) => (dispatch, getStore) => {
    return axios
      .get(apiUrl + `/learn?status=${status}&page=${page}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        if (status === "unpaid") {
          if (response.status === 200) {
            dispatch({
              type: TYPES.GET_COURSES_FROM_CART_SUCCESSED,
              payload: response.data,
            });
          } else {
            dispatch({ type: TYPES.GET_COURSES_FROM_CART_FAILED });
          }
          console.log("carrt res: ", response);
        } else {
          if (response.status === 200) {
            dispatch({
              type: TYPES.GET_COURSES_FROM_DASHBOARD_SUCCESSED,
              payload: response.data,
            });
          } else {
            dispatch({ type: TYPES.GET_COURSES_FROM_DASHBOARD_FAILED });
          }
          console.log("dash response: ", response);
        }
      })
      .catch((error) => {
        console.log(error);
        if (status === "unpaid") {
          dispatch({ type: TYPES.GET_COURSES_FROM_CART_FAILED });
        } else {
          dispatch({ type: TYPES.GET_COURSES_FROM_DASHBOARD_FAILED });
        }
      });
  };
export const ApiGetDetailCategory = (categoryId) => (dispatch, getStore) => {
  return axios
    .get(apiUrl + `/categories/detail?categoryId=${categoryId}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.GET_CATEGORIES_SUCCESSED,
          payload: response.data,
        });
      } else {
        dispatch({ type: TYPES.GET_CATEGORY_DETAIL_FAILED });
      }
      console.log("Detial category: ", response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: TYPES.GET_CATEGORY_DETAIL_FAILED });
    });
};

export const ApiSearchCourses =
  (type, subText, page, limit) => (dispatch, getStore) => {
    return axios
      .get(
        apiUrl +
          `/courses/finds?type=${type}&subText=${subText}&page=${page}&limit=${limit}`
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.SEARCH_COURSES_SUCCESSED,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.SEARCH_COURSES_FAILED });
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: TYPES.SEARCH_COURSES_FAILED });
      });
  };

export const ApiGetsearchTopCourses =
  (type, page, limit) => (dispatch, getStore) => {
    return axios
      .get(apiUrl + `/courses/sorts?type=${type}&page=${page}&limit=${limit}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.GET_SEARCH_TOP_COURSES_SUCCESSED,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.GET_SEARCH_TOP_COURSES_FAILED });
        }
        console.log("RESPONSE: ", response);
        return response;
      })
      .catch((error) => {
        console.log(" Search TOP courses error: ", error);
        dispatch({ type: TYPES.GET_SEARCH_TOP_COURSES_FAILED });
      });
  };

export const ApiChargeCourse =
  (accessToken, learnIds) => (dispatch, getStore) => {
    return axios
      .put(
        apiUrl + "/learn/charge",
        {
          learnIds: learnIds,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: TYPES.CHARGE_COURSE_SUCCESSED });
        } else {
          dispatch({ type: TYPES.CHARGE_COURSE_FAILED });
        }
        console.log("char: ", response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: TYPES.CHARGE_COURSE_FAILED });
      });
  };

//Rate course
export const ApiRateCourse =
  (accessToken, courseId, rateNumber, message) => (dispatch, getStore) => {
    return axios
      .post(
        apiUrl + "/rates",
        {
          courseId,
          rateNumber,
          message,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          dispatch({
            type: TYPES.RATE_COURSE_SUCCESSED,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.RATE_COURSE_FAILED });
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: TYPES.RATE_COURSE_FAILED });
      });
  };
export const ApiGetRatesCourse =
  (accessToken, courseId, page, limit) => (dispatch, getStore) => {
    return axios
      .get(apiUrl + `/rates?courseId=${courseId}&page=${page}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.GET_RATES_COURSE_SUCCESSED,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.GET_RATES_COURSE_FAILED });
        }
        console.log("Get rates by idcourse, ", response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: TYPES.GET_RATES_COURSE_FAILED });
      });
  };

export const ApiSortByPriceCategory =
  (type, value, categoryId, page, limit) => (dispatch, getStore) => {
    return axios
      .get(
        apiUrl +
          `/courses/sorts?type=${type}&value=${value}&categoryId=${categoryId}&page=${page}&limit=${limit}`
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.SORT_COURSES_BY_PRICE_SUCCESSED,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.SORT_COURSES_BY_PRICE_FAILED });
        }
        console.log("RESPONSE: ", response);
        return response;
      })
      .catch((error) => {
        console.log(" Search TOP courses error: ", error);
        dispatch({ type: TYPES.SORT_COURSES_BY_PRICE_FAILED });
      });
  };

export const ApiSortCategory =
  (type, categoryId, page, limit) => (dispatch, getStore) => {
    return axios
      .get(
        apiUrl +
          `/courses/sorts?type=${type}&categoryId=${categoryId}&page=${page}&limit=${limit}`
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.SORT_COURSES_CATEGORY_SUCCESSED,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.SORT_COURSES_CATEGORY_FAILED });
        }
        console.log("RESPONSE: ", response);
        return response;
      })
      .catch((error) => {
        console.log(" Search TOP courses error: ", error);
        dispatch({ type: TYPES.SORT_COURSES_CATEGORY_FAILED });
      });
  };

export const ApiSortAll =
  (type, value, page, limit) => (dispatch, getStore) => {
    return axios
      .get(
        apiUrl +
          `/courses/sorts?type=${type}&value=${value}&page=${page}&limit=${limit}`
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.SORT_COURSES_ALL_SUCCESSED,
            payload: response.data,
          });
        } else {
          dispatch({ type: TYPES.SORT_COURSES_ALL_FAILED });
        }
        console.log("RESPONSE: ", response);
        return response;
      })
      .catch((error) => {
        console.log(" Search TOP courses error: ", error);
        dispatch({ type: TYPES.SORT_COURSES_ALL_FAILED });
      });
  };

export const ApiCoursesView = (courseId) => (dispatch, getStore) => {
  axios
    .put(apiUrl + "/courses/views", {
      courseId,
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: TYPES.PUT_COURSES_VIEW_SUCCESSED });
      } else {
        dispatch({ type: TYPES.PUT_COURSES_VIEW_FAILED });
      }
      console.log("view courses: ", response);
    })
    .catch((error) => {
      console.log(" PUT_COURSES_VIEW error: ", error);
      dispatch({ type: TYPES.PUT_COURSES_VIEW_FAILED });
    });
};

export const ApiGetTopViewsCourses = (page, limit) => (dispatch, getStore) => {
  return axios
    .get(apiUrl + `/courses/sorts?type=views&page=${page}&limit=${limit}`)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.GET_TOP_VIEWS_SUCCESSED,
          payload: response.data,
        });
      } else {
        dispatch({ type: TYPES.GET_TOP_VIEWS_FAILED });
      }
    })
    .catch((error) => {
      console.log("GET_TOP_VIEWS courses error: ", error);
      dispatch({ type: TYPES.GET_TOP_VIEWS_FAILED });
    });
};

export const ApiPostLessonStatus =
  (accessToken, studyStatusId, lessonId,status, timeRecord) =>
  (dispatch, getStore) => {
    return axios
      .post(
        apiUrl + "/learn/lessonstatus",
        {
          studyStatusId,
          lessonId,
          status,
          timeRecord,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          dispatch({ type: TYPES.POST_LESSONSTATUS_SUCCESSED });
        } else {
          dispatch({ type: TYPES.POST_LESSONSTATUS_FAILED });
        }
      })
      .catch((error) => {
        console.log("POST_LESSONSTATUS_FAILED  error: ", error);
        dispatch({ type: TYPES.POST_LESSONSTATUS_FAILED });
      });
  };

// export const ApiPutLessonStatus =
//   (accessToken, lessonStatusId, status, timeRecord) => (dispatch, getStore) => {
//     console.log("sao post");
//     return axios
//       .put(
//         apiUrl + "/learn/lessonstatus",
//         {
//           lessonStatusId,
//           status,
//           timeRecord,
//         },
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       )
//       .then((response) => {
//         if (response.status === 2000) {
//           dispatch({ type: TYPES.PUT_LESSONSTATUS_SUCCESSED });
//         } else {
//           dispatch({ type: TYPES.PUT_LESSONSTATUS_FAILED });
//         }
//       })
//       .catch((error) => {
//         console.log("PUT_LESSONSTATUS_FAILED  error: ", error);
//         dispatch({ type: TYPES.PUT_LESSONSTATUS_FAILED });
//       });
//   };
