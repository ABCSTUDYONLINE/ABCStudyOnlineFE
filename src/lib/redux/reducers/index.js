import { combineReducers } from "redux";
import { Authentication } from "./authhentication";
import { Course } from "./course";

export const reducers = combineReducers({ Authentication, Course });
