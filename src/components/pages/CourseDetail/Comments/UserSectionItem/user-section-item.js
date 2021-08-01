import React from "react";
import { BlackText } from "../../../../../globals/index";
import StarRatings from "react-star-ratings";

function UserSectionItem({ rate }) {
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
        src={
          rate?.user.avatarLink
            ? rate?.user.avatarLink
            : "https://portal.staralliance.com/imagelibrary/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
        }
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
          {`${rate?.user.firstName} ${rate?.user.lastName}`}
        </BlackText>
        <StarRatings
          rating={rate?.rateNumber}
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
          {rate?.message}
        </BlackText>
      </div>
    </div>
  );
}
export default UserSectionItem;
