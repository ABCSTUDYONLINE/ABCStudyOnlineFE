import React, { useEffect } from "react";
import UserSectionItem from "./UserSectionItem/user-section-item";
import { BlackText } from "../../../../globals/index";
import { useDispatch, useSelector } from "react-redux";
import { ApiGetRatesCourse } from "../../../../lib/redux/actions/courses";

function Comments({ courseId }) {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const rates = useSelector((state) => state.Courses.rates);
  console.log("rates: ", rates);

  useEffect(() => {
    dispatch(ApiGetRatesCourse(accessToken, refreshToken, courseId, 1, 10));
  }, []);
  return (
    <div style={{ marginTop: 30 }}>
      <BlackText
        style={{
          fontSize: 22,
          fontWeight: 600,
          paddingBottom: 20,
          borderBottom: "1px solid #f3f3f3",
        }}
      >
        {`${rates?.length} Reviews`}
      </BlackText>
      {rates.map((rate) => (
        <UserSectionItem key={rate.id} rate={rate} />
      ))}
    </div>
  );
}
export default Comments;
