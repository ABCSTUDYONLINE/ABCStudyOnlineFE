import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import { BlackText } from "../../../../../globals/index";

function LearnItem({item}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "40%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 12,
      }}
    >
      <CheckIcon style={{ color: "#ff1949", marginRight: 5 }}></CheckIcon>
      <BlackText
        style={{
          fontSize: 15,
          fontWeight: 500,
        }}
      >
        {item}
      </BlackText>
    </div>
  );
}
export default LearnItem;
