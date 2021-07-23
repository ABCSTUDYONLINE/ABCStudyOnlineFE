import React from "react";
import { BlackText } from "../../../../globals/index";
import LearnItem from "./LearnItem/learn-item";
import RequirementItem from "./RequirementItem/requirement-item";

function CourseAdditionalInformation({ course }) {
  const temp = [1, 2, 3, 4, 5, 6];
  const whatYouWillLearns = course.whatWillLearn.split(/(?:,)+/);
  console.log("whatYouWillLearns", whatYouWillLearns);

  const requirements = course.requirements.split(/(?:,)+/);
  console.log("requirements", requirements);
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
          {whatYouWillLearns?.length > 0 ? (
            whatYouWillLearns.map((item, index) => (
              <LearnItem key={index} item={item} />
            ))
          ) : (
            <BlackText
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "#727695",
                marginLeft: 10,
              }}
            >
              (No What you'll learn)
            </BlackText>
          )}
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
          {requirements.length > 0 ? (
            requirements.map((item, index) => (
              <RequirementItem key={index} item={item} />
            ))
          ) : (
            <BlackText
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "#727695",
                marginLeft: 10,
              }}
            >
              (No Requirements)
            </BlackText>
          )}
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
