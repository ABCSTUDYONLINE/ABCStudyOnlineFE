import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { CardDropCategory } from "../../../globals";
import SectionCourseItem from "./SectionCourseItem/section-course-item";

function SectionCourse({ title, courses }) {
  return (
    <div
      style={{
        padding: "20px 10px 10px 10px",
        boxShadow: "-9px 10px 30px -5px rgba(0,0,0,0.06)",
      }}
    >
      {courses.map((course, index) => (
        <SectionCourseItem key={index} course={course.course} />
      ))}
      <CardDropCategory style={{ fontSize: 18, textAlign: "end" }}>
        {title}
      </CardDropCategory>
    </div>
  );
}

export default SectionCourse;
