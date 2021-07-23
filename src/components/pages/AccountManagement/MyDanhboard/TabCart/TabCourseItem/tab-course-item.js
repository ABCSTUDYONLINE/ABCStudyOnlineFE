import React from "react";
import { useDispatch } from "react-redux";
import {
  BlackText,
  CardButton,
  CardButtonText,
  CardSectionItem,
  RedText,
} from "../../../../../../globals";
import { ApiGetCoursesFromCart, ApiRemoveCourseFromCart } from "../../../../../../lib/redux/actions/courses";

function TabCourseItem({ course }) {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        marginBottom: 10,
        padding: 10,
        marginLeft: 20,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          style={{
            objectFit: "cover",
            width: 120,
            height: 70,
            borderRadius: 8,
          }}
          src={course.course.courseImageLink}
          alt=""
        />
        <div
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardButtonText
            style={{
              fontSize: 20,
              fontWeight: 600,
              margin: 0,
              cursor: "pointer",
            }}
            onClick={() => {
              // history.push(`/course-detail/${course.id}`,{course:course});
              window.scrollTo({ top: 0 });
            }}
          >
            {course.course.courseName}
          </CardButtonText>
          <BlackText style={{ fontSize: 20, fontWeight: 300 }}>
            {`Instructor: ${course.course.teacher.firstName} ${course.course.teacher.lastName}`}
          </BlackText>
        </div>
      </div>
      <CardButton
        style={{
          borderRadius: 32,
          width: 70,
          height: 30,
          padding: 5,
          fontSize: 16,
          fontWeight: 500,
        }}
        onClick={() => {
          dispatch(ApiRemoveCourseFromCart(accessToken, course.id)).then((response)=>{
            if(response?.status===200){
              dispatch(ApiGetCoursesFromCart(accessToken,1,10))
            } else {
              console.log("remove cart add error: ", response.data.message);
            }
          })
        }}
      >
        <div>Delete</div>
      </CardButton>
      <RedText
        style={{ fontSize: 18, fontWeight: 500, marginRight: 30 }}
      >{`$${course.course.fee}`}</RedText>
    </div>
  );
}

export default TabCourseItem;
