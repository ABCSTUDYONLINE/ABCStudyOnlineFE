import React from "react";
import {
  BlackText,
  GrayText,
  RedText,
  CardButtonText,
  CardButton,
} from "../../../globals";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import StarRatings from "react-star-ratings";
import CourseAdditionalInformation from "./CourseAdditionalInformation/course-additional-information";
import InstructorSection from "./InstructorSection/instructor-section";
import Comments from "./Comments/comments";
import RelatedCourses from "./RelatedCourses/related-courses";
import CourseContent from "./CourseContent/course-content";

function CourseDetail() {
  return (
    <div
      style={{
        paddingBottom: 70,
        paddingLeft: 75,
        paddingRight: 75,
        paddingTop: 75,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div style={{ width: "70%" }}>
          <div>
            <BlackText
              style={{
                fontSize: 29,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Certified Graphic Design with Free Project Course
            </BlackText>
            <GrayText style={{ fontSize: 15, color: "#727965" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </GrayText>
          </div>
          <div style={{ marginTop: 20 }}>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FolderOpenOutlinedIcon
                  style={{ color: "#cfcfcf", fontSize: 25 }}
                ></FolderOpenOutlinedIcon>
                <div
                  style={{
                    paddingLeft: 10,
                    paddingRight: 20,
                    borderRight: "1px solid #eee ",
                  }}
                >
                  <RedText style={{ fontSize: 14, fontWeight: 600 }}>
                    CATEGORY
                  </RedText>
                  <CardButtonText
                    style={{
                      cursor: "pointer",
                      fontSize: 16,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    Design
                  </CardButtonText>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <PermIdentityIcon
                  style={{ color: "#cfcfcf", fontSize: 25, paddingLeft: 20 }}
                ></PermIdentityIcon>
                <div
                  style={{
                    paddingLeft: 10,
                    paddingRight: 20,
                    borderRight: "1px solid #eee ",
                  }}
                >
                  <RedText style={{ fontSize: 14, fontWeight: 600 }}>
                    STUDENT ENROLLED
                  </RedText>
                  <CardButtonText
                    style={{
                      cursor: "pointer",
                      fontSize: 16,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    10
                  </CardButtonText>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <DateRangeOutlinedIcon
                  style={{ color: "#cfcfcf", fontSize: 25, paddingLeft: 20 }}
                ></DateRangeOutlinedIcon>
                <div
                  style={{
                    paddingLeft: 10,
                  }}
                >
                  <RedText style={{ fontSize: 14, fontWeight: 600 }}>
                    LAST UPDATED
                  </RedText>
                  <CardButtonText
                    style={{
                      cursor: "pointer",
                      fontSize: 16,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    01/14/2019
                  </CardButtonText>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}}>
          <div
            style={{
              display: "flex",
              textAlign: "end",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <StarRatings
              rating={5}
              starRatedColor="#ffc107"
              numberOfStars={5}
              starDimension="16px"
              starSpacing="2px"
            />
            <GrayText
              style={{
                marginLeft: 4,
                color: "#727965",
              }}
            >
              (5 reviews)
            </GrayText>
          </div>
          <div style={{ display: "flex" }}>
            <BlackText
              style={{
                fontSize: 35,
                fontWeight: 600,
                marginRight: 10,
              }}
            >
              $250
            </BlackText>
            <CardButton style={{ borderRadius: 4 }}>
              <div>Buy Course</div>
            </CardButton>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          <CourseAdditionalInformation />
          <InstructorSection />
          <Comments />
          <RelatedCourses caseTitle={'Related Courses'} />
        </div>
        <CourseContent />
      </div>
    </div>
  );
}

export default CourseDetail;
