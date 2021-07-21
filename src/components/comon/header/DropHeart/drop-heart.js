import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Fade, Paper, Popper } from "@material-ui/core";
import SectionCourse from "../../../pages/SectionCourse/section-course";
import { useSelector } from "react-redux";
import { GrayText } from "../../../../globals";

function Dropbox({ open, anchorEl }) {
  const favoriteCourses = useSelector((state) => state.Courses.favoriteCourses);
  console.log("Favorite courses: ", favoriteCourses);
  return (
    <Popper
      open={open}
      style={{ zIndex: 2300 }}
      anchorEl={anchorEl}
      placement={"bottom-end"}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            {favoriteCourses.length !== 0 ? (
              <SectionCourse title={"See all"} courses={favoriteCourses} />
            ) : (
              <div
                style={{
                  padding: "20px 30px 20px 30px",
                  boxShadow: "-9px 10px 30px -5px rgba(0,0,0,0.06)",
                  alignItems: "center",
                  justifyContent: "center",display:'flex',flexDirection:'column'
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: 100,
                    height: 100,
                    
                  }}
                  src={"/assets/empty-box.png"}
                  alt=""
                />
                <GrayText style={{fontSize:16}}>You don't have any favorite course</GrayText>
              </div>
            )}
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

function DropHeart() {
  const [anchorEl, setanchorEl] = useState(null);
  return (
    <div
      onMouseEnter={(e) => {
        setanchorEl(e.currentTarget);
      }}
      onMouseLeave={() => {
        setanchorEl(null);
      }}
    >
      <FavoriteBorderIcon
        style={{
          fontSize: 30,
          marginRight: 30,
          color: "#ff1949",
          cursor: "pointer",
        }}
      ></FavoriteBorderIcon>
      <Dropbox open={!!anchorEl} anchorEl={anchorEl}></Dropbox>
    </div>
  );
}

export default DropHeart;
