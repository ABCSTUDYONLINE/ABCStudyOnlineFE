import { combineReducers } from "redux";
import { Authentication } from "./authentication";
import { Courses } from "./courses";
import { AccountManagement } from "./account-management";

export const reducers = combineReducers({
  Authentication,
  AccountManagement,
  Courses,
});
