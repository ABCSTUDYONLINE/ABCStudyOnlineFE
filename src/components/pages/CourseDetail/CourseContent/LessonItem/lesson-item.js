import React, { useState } from "react";

import { BlackText, CardButtonText } from "../../../../../globals/index";
import CheckIcon from "@material-ui/icons/Check";

function secondsToms(d) {
  d = Number(d);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  return mDisplay + sDisplay;
}

function LessonItem({
  lesson,
  index,
  handleClickOpen,
  activeId,
  foundedCourseFromDash,
}) {
  const time = secondsToms(lesson.duration);
  const foundLessonStatus =
    foundedCourseFromDash?.studystatus?.lessonStatus.find(
      (lessonStatusItem) => lessonStatusItem.lessonId === lesson.id
    );
  return (
    <div style={{ marginTop: 10, display: "flex", alignItems: "flex-start" }}>
      {/* <BlackText
            style={{
              fontSize: 15,
              fontWeight:  "bold",
            }}
          >
            {`${index}. `}
          </BlackText> */}
      <CardButtonText
        style={{
          cursor: index === 1 || foundedCourseFromDash ? "pointer" : "",
          fontSize: 15,
          fontWeight: activeId !== lesson.id ? 500 : " bold",
          margin: 0,
          marginLeft: 5,
          color: index === 1 || foundedCourseFromDash ? "" : "#727965",
        }}
        onClick={() => {
          if (index === 1 || foundedCourseFromDash) {
            handleClickOpen(lesson.videoLink, lesson.id);
          }
        }}
      >
        {`${index}. ${lesson.lessonName} (${time})`}
      </CardButtonText>
      {foundLessonStatus?.status === "seem" ? (
        <CheckIcon
          style={{ color: "rgb(14, 181, 130)", marginTop: -5, marginLeft: 5 }}
        />
      ) : null }
    </div>
  );
}
export default LessonItem;
