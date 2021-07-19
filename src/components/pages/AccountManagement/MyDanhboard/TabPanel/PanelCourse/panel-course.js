import React, { useState } from "react";
// import { BlackText } from "../../../../../../globals/index";
import ListCourseItem from "../../../../Home/ListCourse/ListCourseItem/list-course-item";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

function PanelCourse({ favoriteCourses }) {
  console.log("PAnel course: ", favoriteCourses);
  // Cho courses vao state
  const [page, setpage] = useState(1);
  const coursePerPage = 4;

  const courseToShow = favoriteCourses.slice(
    (page - 1) * coursePerPage,
    page * coursePerPage
  );

  return (
    <div style={{ marginTop: 30 }}>
      <Grid container spacing={0}>
        {courseToShow.map((course) => {
          return (
            <Grid item xs={3}>
              <ListCourseItem
                key={course.id}
                style={{ maxWidth: 360 }}
                course={course}
              />
            </Grid>
          );
        })}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 100,
        }}
      >
        <Pagination
          count={Math.ceil(favoriteCourses.length / 4)}
          shape="rounded"
          onChange={(e, value) => {
            setpage(value);
          }}
        />
      </div>
    </div>
  );
}
export default PanelCourse;
