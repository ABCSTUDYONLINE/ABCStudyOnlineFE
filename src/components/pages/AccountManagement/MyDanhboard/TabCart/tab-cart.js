import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardButton, GrayText } from "../../../../../globals";
import {
  ApiChargeCourse,
  ApiGetCoursesFromCart,
} from "../../../../../lib/redux/actions/courses";
import TabCourseItem from "./TabCourseItem/tab-course-item";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

function TabCart({ value, index }) {
  const cart = useSelector((state) => state.Courses.cart);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("cart: ", cart);
  let totalPrice = 0;
  let learnIds = "";
  const curTime = new Date();
  cart.map((course) => {
    const expireTime = new Date(course?.course.promotion?.expireTime);
    if (course?.course.promotion && expireTime >= curTime) {
      totalPrice +=
        (course.course.fee *
          (100 - course.course.promotion?.percent * 100 || 100)) /
        100;
    } else {
      totalPrice += course.course.fee;
    }
    learnIds += `${course.id},`;
  });
  learnIds = learnIds.substring(0, learnIds.length - 1);
  console.log("learnIds: ", learnIds);

  const chargeCourseStatus = useSelector(
    (state) => state.Courses.chargeCourseStatus
  );
  const [open, setOpen] = React.useState(false);
  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
          <div style={{ width: 900, marginLeft: 40 }}>
            <div
              style={{ padding: 20, fontWeight: 600, fontSize: 22 }}
            >{`${cart?.length} courses in cart`}</div>
            {cart?.length !== 0 ? (
              <div>
                {cart.map((course) => (
                  <TabCourseItem course={course} />
                ))}
              </div>
            ) : (
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
                  You don't have any course in cart
                </GrayText>
              </div>
            )}
          </div>
          <div>
            <div style={{ padding: 20 }}>Total Price</div>
            <div style={{ padding: 20 }}>{`$${totalPrice}`}</div>
            <CardButton
              style={{ borderRadius: 4, marginLeft: 20 }}
              onClick={() => {
                dispatch(
                  ApiChargeCourse(accessToken, refreshToken, learnIds)
                ).then((response) => {
                  setOpen(true);
                  if (response?.status === 200) {
                    dispatch(
                      ApiGetCoursesFromCart(
                        accessToken,
                        refreshToken,
                        "unpaid",
                        1,
                        10
                      )
                    );

                    dispatch(
                      ApiGetCoursesFromCart(
                        accessToken,
                        refreshToken,
                        "paid",
                        1,
                        10
                      )
                    );
                  } else {
                    console.log(
                      "remove cart add error: ",
                      response?.data.message
                    );
                  }
                });
              }}
            >
              <div>Checkout</div>
            </CardButton>
          </div>
          <div style={{ textAlign: "center" }}>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#252525",
                    textAlign: "center",
                    marginTop: 30,
                  }}
                  id="alert-dialog-description"
                >
                  {chargeCourseStatus
                    ? "Buy Course Successfully!!!"
                    : "Sorry, You don't have any course in cart!!"}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  );
}

export default TabCart;
