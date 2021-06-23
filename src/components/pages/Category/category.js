import React from "react";
import ListCourseItem from "../Home/ListCourse/ListCourseItem/list-course-item";

function Category() {
  const temp = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div
      style={{
        paddingBottom: 70,
        paddingLeft: 75,
        paddingRight: 75,
      }}
    >
      <div>Category Filter</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {temp.map((key) => {
          return <ListCourseItem key={key} style={{ maxWidth: 280 }} />;
        })}
      </div>
    </div>
  );
}
export default Category;
