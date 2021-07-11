import * as TYPES from "../types";

let initState = {
  getTopNewCourseStatus: false,
  
};

export function Course(prevState = initState, action) {
  switch (action.type) {
    case TYPES.GET_TOP_NEW_COURSE_SUCCESSED:
      return { ...prevState, getTopNewCourseStatus: true };

    default:
      return prevState;
  }
}
