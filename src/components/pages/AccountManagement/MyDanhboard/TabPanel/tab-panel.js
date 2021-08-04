import React from "react";
import { Typography } from "@material-ui/core";
import PanelCourse from "./PanelCourse/panel-course";

function TabPanel({ value, index, favoriteCourses }) {
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
          <PanelCourse favoriteCourses={favoriteCourses} />
        </div>
      )}
    </div>
  );
}
export default TabPanel;
