import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { GrPrevious, GrNext } from "react-icons/gr";
import {
  CardAction,
  CardImageBackground,
  CardButton,
} from "../../../../globals";
import { useHistory } from "react-router-dom";

function SlideBackground() {
  const [isHover, setIsHover] = useState(false);
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    prevArrow: !isHover ? (
      <div></div>
    ) : (
      <CardAction
        style={{
          marginRight: "-60px",
          width: 50,
          height: 50,
          position: "absolute",
          top: "75%",
          left: 25,
        }}
      >
        <GrPrevious href="#" />
      </CardAction>
    ),
    nextArrow: !isHover ? (
      <div></div>
    ) : (
      <CardAction
        className="slick-next slick-arrow"
        style={{
          marginLeft: "-60px",
          width: 50,
          height: 50,
          position: "absolute",
          top: "75%",
          right: 25,
        }}
      >
        <GrNext href="#" />
      </CardAction>
    ),
  };
  const history = useHistory();
  const ViewAllCourse = () => {
    console.log("slide background");
    history.push("/search", { title: "All" });
    window.scrollTo({ top: 0 });
  };
  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      style={{ paddingBottom: 30 }}
    >
      <Slide {...properties}>
        <div className="each-slide">
          <CardImageBackground
            style={{
              height: 1000,
              width: "100%",
              position: "relative",
              backgroundImage: `url(${"assets/road.jpg"})`,
            }}
          >
            <div
              style={{
                maxWidth: 650,
                marginLeft: 120,
                marginTop: 35,
                color: "#fff",
              }}
            >
              <div
                style={{
                  lineHeight: 1.2,
                  fontSize: 58,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >{`Learn Without Limits`}</div>
              <div
                style={{
                  maxWidth: 650,
                  lineHeight: 1.9,
                  fontSize: 16,
                  marginTop: 40,
                  marginBottom:20
                }}
              >
                Build skills with courses, certificates, and degrees online from world-class universities and companies.
              </div>
              <CardButton onClick={ViewAllCourse}>
                <div>View Courses</div>
              </CardButton>
            </div>
          </CardImageBackground>
        </div>
        <div className="each-slide">
          <CardImageBackground
            style={{
              height: 1000,
              width: "100%",
              backgroundImage: `url(${"assets/main-banner2.jpg"})`,
            }}
          >
            <div style={{ marginLeft: 120, marginTop: 35, color: "#fff" }}>
              <div
                style={{
                  lineHeight: 1.2,
                  fontSize: 58,
                  fontWeight: 700,
                  maxWidth: 650,
                }}
              >{`Become a Professional Programmer`}</div>
              <div
                style={{
                  maxWidth: 650,
                  lineHeight: 1.9,
                  fontSize: 16,
                  marginTop: 40,
                  marginBottom:20
                }}
              >
                Master Java, Python, Spring Framework, SQL, OOP, Data Structures and Algorithms!
              </div>
              <CardButton onClick={ViewAllCourse}>
                <div>View Courses</div>
              </CardButton>
            </div>
          </CardImageBackground>
        </div>
      </Slide>
    </div>
  );
}
export default SlideBackground;
