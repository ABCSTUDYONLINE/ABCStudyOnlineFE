import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  BlackText,
  CardButton,
  CardButtonText,
  CardSectionItem,
  RedText,
} from "../../../../../../globals";
import {
  ApiGetCoursesFromCart,
  ApiRemoveCourseFromCart,
} from "../../../../../../lib/redux/actions/courses";
import CommentButton from "../../TabDash/comment-button";

function TabCourseItem({ course, isDashBoard, handleOpenDialog }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("Course in tab: ", course);
  const curTime = new Date();
  const expireTime = new Date(course?.course.promotion?.expireTime);
  let seen = true;
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
  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        marginBottom: 10,
        padding: 10,
        marginLeft: 20,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <div style={{ display: "flex", position: "relative" }}>
          <img
            style={{
              objectFit: "cover",
              width: 120,
              height: 70,
              borderRadius: 8,
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
                fontSize: 7,
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
            justifyContent: "center",
          }}
        >
          <CardButtonText
            style={{
              fontSize: 20,
              fontWeight: 600,
              margin: 0,
              cursor: "pointer",
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
        </div>
      </div>
      {isDashBoard ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 300,
            alignItems: "center",
          }}
        >
          <RedText
            style={{ fontSize: 18, fontWeight: 500, marginRight: 30 }}
          >{`$${course.course.fee}`}</RedText>
          <CommentButton
            courseId={course.course.id}
            handleOpenDialog={handleOpenDialog}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 300,
            alignItems: "center",
          }}
        >
          <CardButton
            style={{
              borderRadius: 32,
              width: 70,
              height: 30,
              padding: 5,
              fontSize: 16,
              fontWeight: 500,
            }}
            onClick={() => {
              dispatch(
                ApiRemoveCourseFromCart(accessToken, refreshToken, course.id)
              ).then((response) => {
                if (response?.status === 200) {
                  dispatch(
                    ApiGetCoursesFromCart(
                      accessToken,
                      refreshToken,
                      "unpaid",
                      1,
                      10
                    )
                  );
                } else {
                  console.log("remove cart add error: ", response.data.message);
                }
              });
            }}
          >
            <div>Delete</div>
          </CardButton>
          <div style={{ display: "flex", alignItems: "center" }}>
            {course.course.promotion && expireTime >= curTime ? (
              <div
                style={{
                  color: "#81868a",
                  textDecoration: "line-through",
                  fontSize: 16,
                  fontWeight: 400,
                  marginRight: 5,
                }}
              >{`$${course.course.fee}`}</div>
            ) : null}
            {course.course.promotion && expireTime >= curTime ? (
              <RedText style={{ fontSize: 18, fontWeight: 500 }}>{`$${
                (course.course.fee *
                  (100 -
                    Number(
                      (course.course.promotion?.percent * 100).toFixed(0)
                    ) || 100)) /
                100
              }`}</RedText>
            ) : (
              <RedText
                style={{ fontSize: 18, fontWeight: 500 }}
              >{`$${course.course.fee}`}</RedText>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TabCourseItem;
