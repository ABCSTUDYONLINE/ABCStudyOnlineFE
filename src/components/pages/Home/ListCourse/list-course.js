import React from "react";
import TitleHeader from "../TitleHeader/title-header";
import ListCourseItem from "./ListCourseItem/list-course-item";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ListCourse({ title }) {
  const courses = [1, 2, 3, 4, 5, 6];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      style={{
        paddingBottom: 70,
        paddingLeft: 75,
        paddingRight: 75,
      }}
    >
      <TitleHeader title={title} />

      <Carousel responsive={responsive} showDots={true}>
        {courses.map((course) => (
          <ListCourseItem courses={course} />
        ))}
      </Carousel>
    </div>
  );
}
export default ListCourse;
