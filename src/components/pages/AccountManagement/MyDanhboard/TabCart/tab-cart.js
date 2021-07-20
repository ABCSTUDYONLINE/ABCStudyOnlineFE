import React from "react";
import { CardButton } from "../../../../../globals";
import TabCourseItem from "./TabCourseItem/tab-course-item";

function TabCart({value, index, courses}) {
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
          <div>
            <div>2 courses in cart</div>
            {/* {courses.map((course) => (
          <TabCourseItem course={course} />
        ))} */}
          </div>
          <div>
            <div>Total Price</div>
            <div>10$</div>
            <CardButton style={{ borderRadius: 4 }} onClick={() => {}}>
              <div>Checkout</div>
            </CardButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default TabCart;
