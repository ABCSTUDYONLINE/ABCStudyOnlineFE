import React, { useState } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Fade, Paper, Popper } from "@material-ui/core";
import SectionCourse from "../../../pages/SectionCourse/section-course";
import { useSelector } from "react-redux";

function Dropbox({ open, anchorEl }) {
  const cart = useSelector((state) => state.Courses.cart);
  console.log("CART: ",cart);
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
            {cart.length !== 0 ? (
              <SectionCourse title={"See all"} courses={cart} />
            ) : (
              <div
                style={{
                  padding: "20px 10px 10px 10px",
                  boxShadow: "-9px 10px 30px -5px rgba(0,0,0,0.06)",
                }}
              >
                You don't have any course in cart
              </div>
            )}
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
          marginRight: 20,
          marginLeft:20,
          cursor: "pointer",
        }}
      ></ShoppingCartIcon>
      <Dropbox open={!!anchorEl} anchorEl={anchorEl}></Dropbox>
    </div>
  );
}

export default DropCart;
