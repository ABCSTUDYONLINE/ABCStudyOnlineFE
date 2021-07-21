import React, { useEffect } from "react";
import Instruction from "./instruction/instruction";
import ListCourse from "./ListCourse/list-course";
import SlideBackground from "./SlideBackground/slide-background";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  ApiGetCoursesFromCart,
  ApiGetFavoriteCourses,
  ApiGetTopNewCourses,
  ApiGetTopRateInWeek,
  ApiGetTopRegisterCourses,
} from "../../../lib/redux/actions/courses";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const topNewCourses = useSelector((state) => state.Courses.topNewCourses);
  const topRegisterCourses = useSelector(
    (state) => state.Courses.topRegisterCourses
  );
  const topRateInWeek = useSelector((state) => state.Courses.topRateInWeek);
  const categories = useSelector((state) => state.Courses.categories);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      console.log("Home: ", accessToken);
      dispatch(ApiGetFavoriteCourses(accessToken, 1, 10));
      dispatch(ApiGetCoursesFromCart(accessToken, 1, 10));
    }

    dispatch(ApiGetTopNewCourses(1, 10));
    console.log("Home register courses: ", topNewCourses);
    dispatch(ApiGetTopRegisterCourses(1, 10));

    dispatch(ApiGetTopRateInWeek(1, 4));
    console.log("Home categories: ", categories);
  }, []);

  return (
    <div>
      <SlideBackground />
      <ListCourse title={"Top Rate In Week"} courses={topRateInWeek} />
      <ListCourse title={"New Courses"} courses={topNewCourses} />
      <ListCourse title={"Register Courses"} courses={topRegisterCourses} />
    </div>
  );
}
export default Home;
