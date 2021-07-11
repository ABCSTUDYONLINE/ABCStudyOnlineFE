import { combineReducers } from "redux";
import { Authentication } from "./authentication";
import { Course } from "./course";

export const reducers = combineReducers({ Authentication, Course });
