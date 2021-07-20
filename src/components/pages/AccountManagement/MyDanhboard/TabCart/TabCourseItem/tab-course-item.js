import React from "react";
import {
  BlackText,
  CardButton,
  CardButtonText,
  CardSectionItem,
  RedText,
} from "../../../../../../globals";

function TabCourseItem({ course }) {
  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        cursor: "pointer",
        marginBottom: 10,
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: 100,
          height: 100,
        }}
        src={course.courseImageLink}
        alt=""
      />
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
            // history.push(`/course-detail/${course.id}`,{course:course});
            window.scrollTo({ top: 0 });
          }}
        >
          {course.courseName}
        </CardButtonText>
        <BlackText style={{ fontSize: 20, fontWeight: 300 }}>
          {`Instructor: tu tu ru`}
        </BlackText>
      </div>
      <CardButton style={{ borderRadius: 4 }} onClick={() => {}}>
        <div>Delete</div>
      </CardButton>
      <RedText
        style={{ fontSize: 18, fontWeight: 500 }}
      >{`$${course.fee}`}</RedText>
    </div>
  );
}

export default TabCourseItem;
