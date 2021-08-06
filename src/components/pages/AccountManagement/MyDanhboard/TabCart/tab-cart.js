import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardButton, GrayText } from "../../../../../globals";
import {
  ApiChargeCourse,
  ApiGetCoursesFromCart,
} from "../../../../../lib/redux/actions/courses";
import TabCourseItem from "./TabCourseItem/tab-course-item";

function TabCart({ value, index }) {
  const cart = useSelector((state) => state.Courses.cart);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
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
                dispatch(ApiChargeCourse(accessToken, learnIds)).then(
                  (response) => {
                    if (response?.status === 200) {
                      dispatch(
                        ApiGetCoursesFromCart(accessToken, "unpaid", 1, 10)
                      );

                      dispatch(
                        ApiGetCoursesFromCart(accessToken, "paid", 1, 10)
                      );
                    } else {
                      console.log(
                        "remove cart add error: ",
                        response?.data.message
                      );
                    }
                  }
                );
              }}
            >
              <div>Checkout</div>
            </CardButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default TabCart;
