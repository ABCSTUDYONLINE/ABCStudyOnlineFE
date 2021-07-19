import * as TYPES from "../types";

let initState = {
  topNewCourses: [],
  topRegisterCourses: [],
  categories: [],
  favoriteCourses: [],
  getTopNewCourseStatus: false,
  getTopRegisterCoursesStatus: false,
  getCategoriesStatus: false,
  getFavoriteCoursesStatus: false,
  addFavoriteCourseStatus: false,
  removeFavoriteCourseStatus: false,
};

export function Courses(prevState = initState, action) {
  switch (action.type) {
    case TYPES.GET_TOP_NEW_COURSE_SUCCESSED:
      return {
        ...prevState,
        getTopNewCourseStatus: true,
        topNewCourses: action.payload.data.list,
      };
    case TYPES.GET_TOP_NEW_COURSE_FAILED:
      return { ...prevState, getTopNewCourseStatus: false };
    case TYPES.GET_TOP_REGISTER_COURSE_SUCCESSED:
      return {
        ...prevState,
        getTopRegisterCourseStatus: true,
        topRegisterCourses: action.payload.data.list,
      };
    case TYPES.GET_TOP_REGISTER_COURSE_FAILED:
      return { ...prevState, getTopRegisterCourseStatus: false };
    case TYPES.GET_CATEGORIES_SUCCESSED:
      return {
        ...prevState,
        categories: action.payload.data.list,
        getCategoriesStatus: true,
      };
    case TYPES.GET_CATEGORIES_FAILED:
      return { ...prevState, getCategoriesStatus: false };
    case TYPES.GET_FAVORITE_COURSES_SUCCSEDD:
      return {
        ...prevState,
        favoriteCourses: action.payload.data.list,
        getFavoriteCoursesStatus: true,
      };
    case TYPES.GET_FAVORITE_COURSES_FAILED:
      return { ...prevState, getFavoriteCoursesStatus: false };
    case TYPES.ADD_FAVORITE_COURSE_SUCCESSED:
      return {
        ...prevState,
        addFavoriteCourseStatus: true,
      };
    case TYPES.ADD_FAVORITE_COURSE_FAILED:
      return { ...prevState, addFavoriteCourseStatus: false };
    case TYPES.REMOVE_FAVORITE_COURSE_SUCCESSED:
      return {
        ...prevState,
        removeFavoriteCourseStatus: true,
      };
    case TYPES.REMOVE_FAVORITE_COURSE_FAILED:
      return { ...prevState, removeFavoriteCourseStatus: false };
    default:
      return prevState;
  }
}
