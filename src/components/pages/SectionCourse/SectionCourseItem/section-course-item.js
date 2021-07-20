import React from "react";
import { BlackText,  CardButtonText, CardSectionItem, GrayText } from "../../../../globals";
import StarRatings from "react-star-ratings";
import { useHistory } from "react-router-dom";

function SectionCourseItem({course}) {
  const history=useHistory();
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
        src={course.course.courseImageLink}
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
            history.push(`/course-detail/${course.course.id}`);
            window.scrollTo({ top: 0 });
          }}
        >
          {course.course.courseName}
        </CardButtonText>
        <BlackText style={{ fontSize: 20, fontWeight: 300 }}>
          {`Instructor: ${course.course.teacher.firstName} ${course.course.teacher.lastName}`}
        </BlackText>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <StarRatings
          rating={course.rates.rate}
          starRatedColor="#ffc107"
          numberOfStars={5}
          starDimension="16px"
          starSpacing="2px"
          style={{fontSize:20}}
        />
          <GrayText
            style={{
              marginLeft: 4,
            }}
          >
            {`${course.rates.rate} (${course.rates.total} rating)`}
          </GrayText>
        </div>
        
      </div>
    </CardSectionItem>
  );
}

export default SectionCourseItem;
