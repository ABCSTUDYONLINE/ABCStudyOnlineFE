import React, { useState } from "react";
import {
  BlackText,
  Card,
  CardButtonItem,
  CardButtonText,
  GrayText,
  RedText,
} from "../../../../../../globals/index";
import StarRatings from "react-star-ratings";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import { useHistory } from "react-router-dom";
import ActionLinksHover from "../../../../Home/ListCourse/ListCourseItem/action-links-hover";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";

function PanelCourseItem({ course, style }) {
  let history = useHistory();
  const [isHover, setIsHover] = useState(false);
  const curTime = new Date();
  const expireTime = new Date(course.course.promotion?.expireTime);
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
        >
          <img
            style={{
              objectFit: "cover",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              width: "100%",
              height: 240,
            }}
            src={course.course.courseImageLink}
            alt=""
          />
        </CardButtonItem>
        {course?.course?.promotion && expireTime >= curTime ? (
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
            {Number((course?.course?.promotion.percent * 100).toFixed(0))}%
          </div>
        ) : null}
        {foundedCourseFromDash && seen ? (
          <div
            style={{
              position: "absolute",
              background: "#fff",
              padding: "5px 15px",
              bottom: 0,
              right: 25,
              borderRadius: "5px 5px 0 0",
              color: "#0eb582",
              fontWeight: 400,
              fontSize: 20,
              boxShadow: "0 0 40px 3px rgb(0 0 0 / 4%)",
            }}
          >
            Completed
          </div>
        ) : null}
        {isHover ? <ActionLinksHover id={course.id} /> : <div></div>}
        {isHover ? <ActionLinksHover id={course.course.id} /> : <div></div>}
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
          {course.course.teacher.avatarLink !== null ? (
            <img
              src={course.course.teacher.avatarLink}
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
            {`${course.course.teacher.firstName} ${course.course.teacher.lastName}`}
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
            history.push(`/course-detail/${course.course.id}`);
            window.scrollTo({ top: 0 });
          }}
        >
          {course.course.courseName}
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
              <div style={{ marginLeft: 5 }}>{`6 lessons`}</div>
            </div>
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
        </div>
      </div>
    </Card>
  );
}
export default PanelCourseItem;
