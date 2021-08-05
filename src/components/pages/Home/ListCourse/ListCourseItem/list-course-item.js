import React, { useState } from "react";
import {
  BlackText,
  Card,
  CardButtonItem,
  CardButtonText,
  GrayText,
  RedText,
} from "../../../../../globals";
import StarRatings from "react-star-ratings";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import { useHistory } from "react-router-dom";
import ActionLinksHover from "./action-links-hover";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch } from "react-redux";
import { ApiCoursesView } from "../../../../../lib/redux/actions/courses";

function ListCourseItem({ course, style }) {
  let history = useHistory();
  const dispatch=useDispatch();
  const [isHover, setIsHover] = useState(false);
  let countLessons = 0;
  course?.topics.map((topic) => {
    countLessons += topic.lessons.length;
  });
  // .toLocaleString().slice(0,8)
  const curTime = new Date();
  const expireTime = new Date(course.promotion?.expireTime);
  return (
    <Card
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      style={{
        height: "auto",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        marginBottom: 32,
        ...style,
      }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <CardButtonItem
          onClick={() => {
            console.log("image clicked");
          }}
          style={{
            width: "100%",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              width: "100%",
              height: 280,
            }}
            src={course.courseImageLink}
            alt=""
          />
        </CardButtonItem>
        {course?.promotion && expireTime >= curTime ? (
          <div
            style={{
              position: "absolute",
              background: "#ff1949",
              padding: "16px 4px",
              top: 0,
              left: 8,
              borderRadius: "0 0 32px 32px",
              color: "white",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            {100 - course?.promotion.percent * 100}%
          </div>
        ) : null}
        {isHover ? <ActionLinksHover id={course.id} /> : <div></div>}
      </div>
      <div
        style={{
          padding: "0px 10px 0px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {course.teacher.avatarLink !== null ? (
            <img
              src={course.teacher.avatarLink}
              alt=""
              style={{
                width: 37,
                height: 37,
                borderRadius: "50%",
              }}
            />
          ) : (
            <Avatar src="/broken-image.jpg" />
          )}
          <BlackText style={{ fontSize: 14.5, fontWeight: 500, marginLeft: 8 }}>
            {`${course.teacher.firstName} ${course.teacher.lastName}`}
          </BlackText>
        </div>
        <CardButtonText
          style={{
            cursor: "pointer",
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.5,
          }}
          onClick={() => {
            dispatch(ApiCoursesView(course.id));
            history.push(`/course-detail/${course.id}`);
            window.scrollTo({ top: 0 });
          }}
        >
          {course.courseName}
        </CardButtonText>
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
          />
          <GrayText
            style={{
              marginLeft: 4,
            }}
          >
            {`${course.rates.rate} (${course.rates.total} rating)`}
          </GrayText>
        </div>
        <div
          style={{
            padding: 20,
            borderTop: "1px solid #e2f4ff",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: -7,
              marginRight: -7,
              fontSize: 15,
              color: "#727695",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <PermIdentityIcon></PermIdentityIcon>
              <div>{`${course.studies} students`}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ImportContactsIcon></ImportContactsIcon>
              <div style={{ marginLeft: 5 }}>{`${countLessons} lessons`}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {course.promotion && expireTime >= curTime ? (
                <div
                  style={{
                    color: "#81868a",
                    textDecoration: "line-through",
                    fontSize: 16,
                    fontWeight: 400,
                    marginRight: 5,
                  }}
                >{`$${course.fee}`}</div>
              ) : null}
              {expireTime >= curTime ? (
                <RedText style={{ fontSize: 18, fontWeight: 500 }}>{`$${
                  course.fee * (course.promotion?.percent || 1)
                }`}</RedText>
              ) : (
                <RedText
                  style={{ fontSize: 18, fontWeight: 500 }}
                >{`$${course.fee}`}</RedText>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
export default ListCourseItem;
