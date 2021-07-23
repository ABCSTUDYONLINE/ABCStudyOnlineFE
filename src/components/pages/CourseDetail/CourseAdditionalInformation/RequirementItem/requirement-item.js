import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { BlackText } from "../../../../../globals/index";

function RequirementItem({item}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 12,
      }}
    >
      <FiberManualRecordIcon
        style={{ fontSize: 10, marginRight: 5 }}
      ></FiberManualRecordIcon>
      <BlackText
        style={{
          fontSize: 15,
          fontWeight: 400,
          color: "#727695",
        }}
      >
        item
      </BlackText>
    </div>
  );
}
export default RequirementItem;
