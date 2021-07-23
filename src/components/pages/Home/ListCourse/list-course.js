import React from "react";
import TitleHeader from "../TitleHeader/title-header";
import ListCourseItem from "./ListCourseItem/list-course-item";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgress } from "@material-ui/core";
import { GrayText } from "../../../../globals";

function ListCourse({ title, courses }) {
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
      {!courses || courses?.length === 0  ? (
        <div
          style={{
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : courses?.length === 0 ? (
        <div
          style={{
            padding: "20px 30px 20px 30px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              width: 100,
              height: 100,
            }}
            src={"/assets/empty-box.png"}
            alt=""
          />
          <GrayText style={{ fontSize: 16, marginTop: 10 }}>
            Nothing to show
          </GrayText>
        </div>
      ) : (
        <Carousel responsive={responsive} showDots={true}>
          {courses.map((course) => (
            <ListCourseItem key={course.id} course={course} />
          ))}
        </Carousel>
      )}
    </div>
  );
}
export default ListCourse;
