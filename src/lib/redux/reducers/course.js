import * as TYPES from "../types";

let initState = {
  getTopNewCourseStatus: false,
  todos: null,
  currentTodo: null,
};

export function Course(prevState = initState, action) {
  switch (action.type) {
    case TYPES.GET_TOP_NEW_COURSE_SUCCESSED:
      return { ...prevState, getTopNewCourseStatus: true };
    case TYPES.GET_TODOS:
      return { ...prevState, todos: action.payload };
    case TYPES.GET_CURRENT_TODO:
      return { ...prevState, currentTodo: action.payload };

    default:
      return prevState;
  }
}
