import React from "react";
import { BlackText, RedText } from "../../../../globals/index";
import LessonItem from "./LessonItem/lesson-item";

function CourseContent() {
  const temp = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
      <div style={{ padding: 20 }}>
        <BlackText
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Course Content
        </BlackText>
        <RedText style={{ fontSize: 13, fontWeight: 600, marginTop: 30 }}>
          Chapter 1
        </RedText>
        <div style={{ marginTop: 10 }}>
          {temp.map((i) => (
            <LessonItem key={temp[i]} lesson={temp[i - 1]} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default CourseContent;
