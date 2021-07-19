import React from "react";
import { BlackText } from "../../../../globals/index";
import LearnItem from "./LearnItem/learn-item";
import RequirementItem from "./RequirementItem/requirement-item";

function CourseAdditionalInformation({course}) {
  const temp = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <img
        style={{
          objectFit: "cover",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          width: "100%",
        }}
        src={course.courseImageLink}
        alt=""
      />
      <div style={{ marginTop: 30 }}>
        <BlackText
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          What you'll learn
        </BlackText>
        <div style={{ marginTop: 15, flexWrap: "wrap", display: "flex" }}>
          {temp.map((i) => (
            <LearnItem key={temp[i]} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <BlackText
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Requirements
        </BlackText>
        <div style={{ marginTop: 15 }}>
          {temp.map((i) => (
            <RequirementItem key={temp[i]} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <BlackText
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Description
        </BlackText>

        <BlackText
          style={{
            fontSize: 15,
            fontWeight: 400,
            color: "#727695",
            marginTop: 15,
          }}
        >
          {course.detailCourseDescription}
        </BlackText>
      </div>
    </div>
  );
}

export default CourseAdditionalInformation;
