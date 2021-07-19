import React, { useEffect } from "react";
import Instruction from "./instruction/instruction";
import ListCourse from "./ListCourse/list-course";
import SlideBackground from "./SlideBackground/slide-background";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {   ApiGetFavoriteCourses, ApiGetTopNewCourses, ApiGetTopRegisterCourses } from "../../../lib/redux/actions/courses";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.Authentication.accessToken);
  const topNewCourses = useSelector((state) => state.Courses.topNewCourses);
  const topRegisterCourses = useSelector((state) => state.Courses.topRegisterCourses);
  const categories = useSelector((state)=>state.Courses.categories);
  

  useEffect(() => {
    console.log("Home: ", accessToken);
    dispatch(ApiGetTopNewCourses( 1, 10));
    dispatch(ApiGetTopRegisterCourses(1,10));  
    dispatch(ApiGetFavoriteCourses(accessToken,1,10));
    console.log("Home new courses: ", topNewCourses);
    console.log("Home categories: ", categories);
  }, []);

  return (
    <div>
      <SlideBackground />
      <ListCourse title={"New Courses"} courses={topNewCourses} />
      <ListCourse title={"Register Courses"} courses={topRegisterCourses} />
    </div>
  );
}
export default Home;
