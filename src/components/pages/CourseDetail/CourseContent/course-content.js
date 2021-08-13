import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlackText, RedText } from "../../../../globals/index";
import {
  ApiGetCoursesFromCart,
  ApiPostLessonStatus,
} from "../../../../lib/redux/actions/courses";
import LessonItem from "./LessonItem/lesson-item";

function CourseContent({
  course,
  handleClickOpen,
  activeId,
  foundedCourseFromDash,
  topicIndex,
  setTopicIndex,
  videoIndex,
  setVideoIndex,
  duration,
  secondsElapsed,
  setnextLesson,
  setNextVideoIndex,
  setNextTopicIndex,
}) {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem("accessToken");
  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        boxShadow: "0 8px 16px 0 rgb(146 184 255 / 20%)",
        borderRadius: "1px solid #f3f3f3",
        width: "30%",
      }}
    >
      <div style={{ padding: 20 }}>
        <BlackText
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Course Syllabus
        </BlackText>
        {course.topics.map((topic, indexFirst) => (
          <div key={indexFirst}>
            <RedText style={{ fontSize: 18, fontWeight: 600, marginTop: 30 }}>
              {`Chapter ${indexFirst + 1}`}
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
              {topic.lessons.map((lesson, index) => (
                <LessonItem
                  key={index + 1}
                  lesson={lesson}
                  index={index + 1}
                  handleClickOpen={(url, id) => {
                    // setFoundedLessonStatus(
                    //   foundedCourseFromDash?.studystatus?.lessonStatus.find(
                    //     (lessonStatusItem) =>
                    //       lessonStatusItem.lessonId === course.topics[topicIndex].lessons[videoIndex].id
                    //   )
                    // );
                    console.log("topic : video ", topicIndex, videoIndex);
                    if (duration) {
                      console.log("duration: ", duration);
                      dispatch(
                        ApiPostLessonStatus(
                          accessToken,
                          foundedCourseFromDash?.studystatus.id,
                          course.topics[topicIndex].lessons[videoIndex].id,
                          "seeing",
                          secondsElapsed
                        )
                      ).finally(() => {
                        console.log("send record time");
                        dispatch(
                          ApiGetCoursesFromCart(accessToken, "paid", 1, 10)
                        );
                      });
                    }
                    if (topic.lessons[index + 1]) {
                      setnextLesson(topic.lessons[index + 1]);
                      setNextVideoIndex(videoIndex + 1);
                      setNextTopicIndex(indexFirst);
                    } else if (course.topics[topicIndex + 1]) {
                      setnextLesson(course.topics[topicIndex + 1].lessons[0]);
                      setNextVideoIndex(0);
                      setNextTopicIndex(topicIndex + 1);
                    } else {
                      setNextVideoIndex(-1);
                      setNextTopicIndex(-1);
                    }
                    setTopicIndex(indexFirst);
                    setVideoIndex(index);
                    handleClickOpen(url, id);
                  }}
                  activeId={activeId}
                  foundedCourseFromDash={foundedCourseFromDash}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CourseContent;
