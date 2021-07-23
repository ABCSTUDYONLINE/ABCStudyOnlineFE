import React from "react";
import {  useSelector } from "react-redux";
import { GrayText } from "../../../../../globals";
import TabCourseItem from "../TabCart/TabCourseItem/tab-course-item";

function TabDash({ value, index }) {
  const myDash = useSelector((state) => state.Courses.myDash);
  console.log("myDash: ",myDash);
  return (
    <div role="tabpanel" hidden={value !== index} id={index}>
      {value === index && (
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            boxShadow: "0 8px 16px 0 rgb(146 184 255 / 20%)",
            marginTop: 5,
            display: "flex",
          }}
        >
          <div style={{ width: 900, marginLeft:40 }}>
            <div style={{padding:20,fontWeight:600,fontSize:22}}>{`${myDash?.length} courses in DashBoard`}</div>
            {myDash?.length!==0 ?
            <div>
              {myDash.map((course) => (
                <TabCourseItem course={course} isDashBoard={true} />
              ))}
            </div>
            :
            <div
              style={{
                padding: "20px 30px 20px 30px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{
                  objectFit: "cover",
                  width: 100,
                  height: 100,
                }}
                i
                src={"/assets/empty-box.png"}
                alt=""
              />
              <GrayText style={{ fontSize: 16 }}>
                You don't have any course in DashBoard
              </GrayText>
            </div>
}
          </div>
         
        </div>
      )}
    </div>
  );
}

export default TabDash;
