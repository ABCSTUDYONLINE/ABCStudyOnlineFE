import React from "react";
import Instruction from "./instruction/instruction";
import ListCourse from "./ListCourse/list-course";
import SlideBackground from "./SlideBackground/slide-background";

function Home() {
  return (
    <div>
      <SlideBackground />
      <ListCourse title={"Trending Courses"} />
      <ListCourse title={"Most Viewed Courses"} />
      <ListCourse title={"New Courses"} />
      <Instruction />
    </div>
  );
}
export default Home;
