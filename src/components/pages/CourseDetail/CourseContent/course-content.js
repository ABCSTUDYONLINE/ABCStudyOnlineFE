import React from "react";
import { useSelector } from "react-redux";
import { BlackText, RedText } from "../../../../globals/index";
import LessonItem from "./LessonItem/lesson-item";

function CourseContent({ course,handleClickOpen,activeId,foundedCourseFromDash }) {
  
  return (
    <div style={{ paddingLeft: 20, paddingRight: 20,boxShadow:"0 8px 16px 0 rgb(146 184 255 / 20%)",borderRadius:'1px solid #f3f3f3',width:'30%'  }}>
      <div style={{ padding: 20 }}>
        <BlackText
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Course Syllabus
        </BlackText>
        {course.topics.map((topic, index) => (
          <div key={index}>
            <RedText style={{ fontSize: 18, fontWeight: 600, marginTop: 30 }}>
              {`Chapter ${++index}`}
            </RedText>
            <BlackText
              style={{
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {topic.topicName}
            </BlackText>
            <div style={{ marginTop: 20 }}>
              {topic.lessons.map((lesson,index) => (
                <LessonItem key={++index} lesson={lesson} index={++index} handleClickOpen={handleClickOpen} activeId={activeId} foundedCourseFromDash={foundedCourseFromDash} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CourseContent;
