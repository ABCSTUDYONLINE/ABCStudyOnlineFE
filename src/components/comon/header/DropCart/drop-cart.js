import React, { useState } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Fade, Paper, Popper } from "@material-ui/core";
import SectionCourse from "../../../pages/SectionCourse/section-course";
import { useSelector } from "react-redux";

function Dropbox({ open, anchorEl }) {
  const favoriteCourses = useSelector((state) => state.Courses.favoriteCourses);
  return (
    <Popper
      open={open}
      style={{ zIndex: 2300 }}
      anchorEl={anchorEl}
      placement={"bottom-start"}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <SectionCourse title={"Proceed to Checkout"} courses={favoriteCourses} />
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

function DropCart() {
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
      <ShoppingCartIcon
        style={{
          fontSize: 30,
          marginRight: 60,
          cursor: "pointer",
        }}
      ></ShoppingCartIcon>
      <Dropbox open={!!anchorEl} anchorEl={anchorEl}></Dropbox>
    </div>
  );
}

export default DropCart;
