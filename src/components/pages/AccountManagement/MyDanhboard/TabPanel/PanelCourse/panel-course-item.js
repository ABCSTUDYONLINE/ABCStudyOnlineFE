import React, { useState } from "react";
import {
  BlackText,
  Card,
  CardButtonItem,
  CardButtonText,
  GrayText,
  RedText,
} from "../../../../../../globals/index"
import StarRatings from "react-star-ratings";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import { useHistory } from "react-router-dom";
import ActionLinksHover from "../../../../Home/ListCourse/ListCourseItem/action-links-hover"
import Avatar from "@material-ui/core/Avatar";

function PanelCourseItem({ course, style }) {
  let history = useHistory();
  const [isHover, setIsHover] = useState(false);
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
            }}
            src={course.course.courseImageLink}
            alt=""
          />
        </CardButtonItem>
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
          {course.course.teacher.avatarLink !==null ? (
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
          <BlackText style={{ fontSize: 14.5, fontWeight: 500,marginLeft:8 }}>
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
            <RedText
              style={{ fontSize: 18, fontWeight: 500 }}
            >{`$${course.course.fee}`}</RedText>
          </div>
        </div>
      </div>
    </Card>
  );
}
export default PanelCourseItem;
