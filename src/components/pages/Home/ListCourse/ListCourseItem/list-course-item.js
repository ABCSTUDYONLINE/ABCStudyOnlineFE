import React from "react";
import {
  BlackText,
  Card,
  CardButtonItem,
  CardButtonText,
  GrayText,
  RedText,
} from "../../../../../globals";
import StarRatings from "react-star-ratings";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

function ListCourseItem({ course, style }) {
  return (
    <Card
      style={{
        height: "auto",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        marginBottom: 32,
        ...style,
      }}
    >
      <CardButtonItem
        onClick={() => {
          console.log("image clicked");
        }}
      >
        <img
          style={{
            objectFit: "cover",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            width: "100%",
          }}
          src="/assets/courses1.jpg"
          alt=""
        />
      </CardButtonItem>
      <div
        style={{
          padding: "0px 10px 0px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/user1.jpg"
            alt=""
            style={{
              width: 37,
              height: 37,
              marginRight: 4,
              borderRadius: "50%",
            }}
          />
          <BlackText style={{ fontSize: 14.5, fontWeight: 500 }}>
            Steven Smith
          </BlackText>
        </div>
        <CardButtonText
          style={{
            cursor: "pointer",
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          Raque Professional IT Expert Certificate Course
        </CardButtonText>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <StarRatings
            rating={4.5}
            starRatedColor="#ffc107"
            numberOfStars={5}
            starDimension="16px"
            starSpacing="2px"
          />
          <GrayText
            style={{
              marginLeft: 4,
            }}
          >
            4.5 (1 rating)
          </GrayText>
        </div>
        <div
          style={{
            padding: 20,
            borderTop: "1px solid #e2f4ff",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: -7,
              marginRight: -7,
              fontSize: 15,
              color: "#727695",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <PermIdentityIcon></PermIdentityIcon>
              <div>10 students</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ImportContactsIcon></ImportContactsIcon>
              <div style={{ marginLeft: 5 }}>6 lessons</div>
            </div>
            <RedText style={{ fontSize: 18, fontWeight: 500 }}>$200</RedText>
          </div>
        </div>
      </div>
    </Card>
  );
}
export default ListCourseItem;
