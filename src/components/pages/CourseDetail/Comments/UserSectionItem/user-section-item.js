import React from "react";
import { BlackText } from "../../../../../globals/index";
import StarRatings from "react-star-ratings";

function UserSectionItem() {
  return (
    <div
      style={{
        paddingBottom: 20,
        paddingTop: 20,
        borderBottom: "1px solid #f3f3f3",
        display: "flex",
      }}
    >
      <img
        src="/assets/user1.jpg"
        alt=""
        style={{
          width: 90,
          height: 90,
          border: "3px solid '#fff",
          borderRadius: 5,
          marginRight: 20,
        }}
      />
      <div>
        <BlackText style={{ fontSize: 17, fontWeight: 600, marginBottom: 10 }}>
          James Anderson
        </BlackText>
        <StarRatings
          rating={5}
          starRatedColor="#ffc107"
          numberOfStars={5}
          starDimension="16px"
          starSpacing="2px"
        />
        <BlackText
          style={{
            fontSize: 15,
            fontWeight: 400,
            color: "#727695",
            marginTop: 10,
          }}
        >
          James Anderson is a celebrated photographer, author, and teacher who
          brings passion to everything he does.
        </BlackText>
      </div>
    </div>
  );
}
export default UserSectionItem;
