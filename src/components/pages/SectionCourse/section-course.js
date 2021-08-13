import React  from "react";
import { useHistory } from "react-router-dom";
import { CardDropCategory } from "../../../globals";
import SectionCourseItem from "./SectionCourseItem/section-course-item";

function SectionCourse({ title, courses, tab }) {
  const history = useHistory();
  return (
    <div
      style={{
        padding: "20px 10px 10px 10px",
        boxShadow: "-9px 10px 30px -5px rgba(0,0,0,0.06)",
      }}
    >
      {courses.map((course, index) => (
        <SectionCourseItem key={index} course={course} />
      ))}
      <CardDropCategory
        style={{ fontSize: 18, textAlign: "end" }}
        onClick={() => {
          history.push(`/myDashboardPage?tab=${tab}`);
        }}
      >
        {title}
      </CardDropCategory>
    </div>
  );
}

export default SectionCourse;
