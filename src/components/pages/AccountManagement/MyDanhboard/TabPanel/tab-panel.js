import React from "react";
import { Typography } from "@material-ui/core";
import PanelCourse from "./PanelCourse/panel-course";

function TabPanel({ value, index, content }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={index}>
      {value === index && (
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            boxShadow: "0 8px 16px 0 rgb(146 184 255 / 20%)",
            marginTop: 5,
          }}
        >
          <Typography>{content}</Typography>
          <PanelCourse />
        </div>
      )}
    </div>
  );
}
export default TabPanel;
