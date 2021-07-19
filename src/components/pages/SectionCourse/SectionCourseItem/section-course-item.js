import React from "react";
import { BlackText,  CardButtonText, CardSectionItem } from "../../../../globals";
import StarRatings from "react-star-ratings";

function SectionCourseItem({course}) {
  return (
    <CardSectionItem
      style={{
        height: "auto",
        display: "flex",
        cursor: "pointer",
        marginBottom:10
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: 100,
          height: 100,
        }}
        src={course.courseImageLink}
        alt=""
      />
      <div style={{marginLeft:10,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <CardButtonText
          style={{
            fontSize: 20,
            fontWeight: 600,
            margin:0
          }}
          onClick={() => {
            // history.push(`/course-detail/${course.id}`,{course:course});
            window.scrollTo({ top: 0 });
          }}
        >
          {course.courseName}
        </CardButtonText>
        <BlackText style={{ fontSize: 20, fontWeight: 300 }}>
          {`Instructor: tu tu ru`}
        </BlackText>
        <StarRatings
          rating={0}
          starRatedColor="#ffc107"
          numberOfStars={5}
          starDimension="16px"
          starSpacing="2px"
          style={{fontSize:20}}
        />
      </div>
    </CardSectionItem>
  );
}

export default SectionCourseItem;
