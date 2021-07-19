import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { CardDropCategory } from "../../../globals";
import SectionCourseItem from "./SectionCourseItem/section-course-item";

function SectionCourse({ courses }) {
  return (
    <div style={{
        padding: "20px 10px 10px 10px",}}>
      {courses.map((course, index) => (
        <SectionCourseItem key={index} course={course.course} />
      ))}
      <CardDropCategory style={{fontSize:18, textAlign:'end'}}>
        See all
      </CardDropCategory>
    </div>
  );
}

export default SectionCourse;
