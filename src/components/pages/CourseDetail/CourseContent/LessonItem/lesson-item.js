import React from "react";
import { BlackText } from "../../../../../globals/index";

function LessonItem({ lesson }) {
  return (
    <div style={{ marginTop: 10, display: "flex" }}>
      <BlackText
        style={{
          fontSize: 15,
          fontWeight: 400,
        }}
      >
        {`${lesson}. `}
      </BlackText>
      <BlackText
        style={{
          fontSize: 15,
          fontWeight: 400,
          color: "#727695",
        }}
      >
        Secret 1: Sell The Problem, Not The Solution (14:37)
      </BlackText>
    </div>
  );
}
export default LessonItem;
