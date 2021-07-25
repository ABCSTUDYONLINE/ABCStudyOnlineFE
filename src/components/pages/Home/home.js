import React, { useEffect, useState } from "react";
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
  const [loadingNewCourses, setloaLingNewCourses] = useState(false);
  const [loadingRateInWeek, setLoadingRateInWeek] = useState(false);
  const [loadingRegisterCourses, setLoadingRegisterCourses] = useState(false);

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
      dispatch(ApiGetCoursesFromCart(accessToken, "unpaid", 1, 10));
      dispatch(ApiGetCoursesFromCart(accessToken, "paid", 1, 10));
    }

    setloaLingNewCourses(true);
    dispatch(ApiGetTopNewCourses(1, 10)).finally(() => {
      setloaLingNewCourses(false);
    });

    console.log("Home topNewCourses courses: ", topNewCourses);

    setLoadingRegisterCourses(true)
    dispatch(ApiGetTopRegisterCourses(1, 10)).finally(()=>{
      setLoadingRegisterCourses(false)
    })

    setLoadingRateInWeek(true)
    dispatch(ApiGetTopRateInWeek(1, 4)).finally(()=>{
      setLoadingRateInWeek(false)
    })
    console.log("Home categories: ", categories);
  }, []);

  return (
    <div>
      <SlideBackground />
      <ListCourse
        title={"Top Rate In Week"}
        courses={topRateInWeek}
        loadingCourses={loadingRateInWeek}
      />

      <ListCourse
        title={"New Courses"}
        courses={topNewCourses}
        loadingCourses={loadingNewCourses}
      />

      <ListCourse
        title={"Register Courses"}
        courses={topRegisterCourses}
        loadingCourses={loadingRegisterCourses}
      />
    </div>
  );
}
export default Home;
