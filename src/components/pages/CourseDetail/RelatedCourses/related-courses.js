import React from "react";
import { BlackText } from "../../../../globals/index";
import ListCourseItem from "../../Home/ListCourse/ListCourseItem/list-course-item";
import Carousel from "react-multi-carousel";

function RelatedCourses({caseTitle,style,relatedCourses}) {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ marginTop: 30 }}>
      <BlackText
        style={{
          fontSize: 22,
          fontWeight: 600,
          paddingBottom: 20,
          borderBottom: "1px solid #f3f3f3",
          ...style
        }}
      >
        {caseTitle}
      </BlackText>
      <Carousel
        responsive={responsive}
        showDots={true}
        style={{ marginTop: 15, display: "flex" }}
      >
        {relatedCourses.map((course,index) => (
          <ListCourseItem
            key={index}
            course={course}
            style={{ maxWidth: 360 }}
          />
        ))}
      </Carousel>
    </div>
  );
}
export default RelatedCourses;
