import React, { useState } from "react";

import { BlackText, CardButtonText } from "../../../../../globals/index";

function LessonItem({ lesson, index, handleClickOpen, activeId }) {
  return (
    <div style={{ marginTop: 10, display: "flex" }}>
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
          cursor:  index===1 ? "pointer" : "",
          fontSize: 15,
          fontWeight:  (activeId !== lesson.id ? 500 : " bold"),
          margin: 0,
          marginLeft: 5,
          color: index===1 ? "" : "#727965" 
        }}
        onClick={() => {
          if(index===1){
            handleClickOpen(lesson.videoLink, lesson.id);
          }
        }}
      >
        {`${index}. ${lesson.lessonName}`}
      </CardButtonText>
    </div>
  );
}
export default LessonItem;
