import * as TYPES from "../types";

export function Course(prevState = { getTopNewCourseStatus: false }, action) {
  switch (action.type) {
    case TYPES.GET_TOP_NEW_COURSE_SUCCESSED:
      return { ...prevState, getTopNewCourseStatus: true };

    default:
      return prevState;
  }
}
