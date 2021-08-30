import React from "react";
import {
  BlackText,
  CardButtonText,
  CardSectionItem,
  GrayText,
} from "../../../../globals";
import StarRatings from "react-star-ratings";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function SectionCourseItem({ course }) {
  const history = useHistory();
  let seen = true;
  let countLessons = 0;
  course?.course?.topics.map((topic) => {
    countLessons += topic.lessons.length;
  });

  const myDash = useSelector((state) => state.Courses.myDash);
  let foundedCourseFromDash = myDash?.find(
    (dashItem) => dashItem.course.id === course?.course?.id
  );

  if (foundedCourseFromDash?.studystatus?.lessonStatus.length === 0) {
    seen = false;
  }
  foundedCourseFromDash?.studystatus?.lessonStatus?.map((lessonStatus) => {
    if (lessonStatus.status === "seeing") {
      seen = false;
    }
  });

  // .toLocaleString().slice(0,8)
  const curTime = new Date();
  const expireTime = new Date(course?.course?.promotion?.expireTime);
  return (
    <CardSectionItem
      style={{
        height: "auto",
        display: "flex",
        cursor: "pointer",
        marginBottom: 10,
        position: "relative",
      }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <img
          style={{
            objectFit: "cover",
            width: 100,
            height: 100,
          }}
          src={course.course.courseImageLink}
          alt=""
        />
        {course?.course?.promotion && expireTime >= curTime ? (
          <div
            style={{
              position: "absolute",
              background: "#ff1949",
              padding: "12px 4px",
              top: 0,
              left: 8,
              borderRadius: "0 0 32px 32px",
              color: "white",
              fontWeight: 700,
              fontSize: 10,
            }}
          >
            {Number((course?.course?.promotion.percent * 100).toFixed(0))}%
          </div>
        ) : null}
        {foundedCourseFromDash && seen ? (
          <div
            style={{
              position: "absolute",
              background: "#fff",
              padding: "5px 5px",
              bottom: 0,
              right: 10,
              borderRadius: "5px 5px 0 0",
              color: "#0eb582",
              fontWeight: 400,
              fontSize: 6,
              boxShadow: "0 0 40px 3px rgb(0 0 0 / 4%)",
            }}
          >
            Completed
          </div>
        ) : null}
      </div>

      <div
        style={{
          marginLeft: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardButtonText
          style={{
            fontSize: 20,
            fontWeight: 600,
            margin: 0,
          }}
          onClick={() => {
            history.push(`/course-detail/${course.course.id}`);
            window.scrollTo({ top: 0 });
          }}
        >
          {course.course.courseName}
        </CardButtonText>
        <BlackText style={{ fontSize: 20, fontWeight: 300 }}>
          {`Instructor: ${course.course.teacher.firstName} ${course.course.teacher.lastName}`}
        </BlackText>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <StarRatings
            rating={course.rates.rate}
            starRatedColor="#ffc107"
            numberOfStars={5}
            starDimension="16px"
            starSpacing="2px"
            style={{ fontSize: 20 }}
          />
          <GrayText
            style={{
              marginLeft: 4,
            }}
          >
            {`${Number((course.rates.rate).toFixed(2))} (${course.rates.total} rating)`}
          </GrayText>
        </div>
      </div>
    </CardSectionItem>
  );
}

export default SectionCourseItem;
