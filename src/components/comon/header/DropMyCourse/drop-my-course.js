import React, { useState } from "react";
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Fade, Paper, Popper } from "@material-ui/core";
import SectionCourse from "../../../pages/SectionCourse/section-course";
import { useSelector } from "react-redux";
import { GrayText } from "../../../../globals";

function Dropbox({ open, anchorEl }) {
  const myDash = useSelector((state) => state.Courses.myDash);
  console.log("myDash: ", myDash);
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
            {myDash.length !== 0 ? (
              <SectionCourse title={"See all"} courses={myDash} tab={"My Course"} />
            ) : (
              <div
                style={{
                  padding: "20px 30px 20px 30px",
                  boxShadow: "-9px 10px 30px -5px rgba(0,0,0,0.06)",
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
                  }}i
                  src={"/assets/empty-box.png"}
                  alt=""
                />
                <GrayText style={{ fontSize: 16 }}>
                  You don't have any course in Dash
                </GrayText>
              </div>
            )}
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

function DropMyCourse() {
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
      <DashboardIcon
        style={{
          fontSize: 30,
          marginRight: 30,
          marginLeft: 20,
          cursor: "pointer",
        }}
      ></DashboardIcon>
      <Dropbox open={!!anchorEl} anchorEl={anchorEl}></Dropbox>
    </div>
  );
}

export default DropMyCourse;
