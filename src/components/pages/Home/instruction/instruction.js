import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { CardIcon } from "../../../../globals";
import DetailsIcon from "@material-ui/icons/Details";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function Instruction() {
  return (
    <div
      style={{
        backgroundColor: "#ff1949",
        zIndex: 1,
        position: "relative",
        paddingBottom: 70,
        paddingTop: 100,
        paddingRight: 75,
        paddingLeft: 75,
      }}
    >
      <div style={{ marginBottom: 60 }}>
        <div
          style={{
            color: "#fff",
            marginBottom: 10,
            fontSize: 15,
            fontWeight: 500,
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          FIND COURSES
        </div>
        <div
          style={{
            color: "#fff",
            marginBottom: 12,
            fontSize: 37,
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          How It Works?
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            flex: "0 0 auto",
            width: "33%",
          }}
        >
          <CardIcon>
            <SearchIcon
              style={{
                fontSize: 50,
                position: "absolute",
                top: "25%",
                left: "25%",
              }}
            />
          </CardIcon>
          <div
            style={{
              color: "#fff",
              marginBottom: 12,
              fontSize: 22,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Search Courses
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            An nec placerat repudiare scripserit, temporibus complectitur at
            sea, vel ignota fierent rreloquentiam id.
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            width: "33%",
          }}
        >
          <CardIcon>
            <DetailsIcon
              style={{
                fontSize: 50,
                position: "absolute",
                top: "25%",
                left: "25%",
              }}
            />
          </CardIcon>
          <div
            style={{
              color: "#fff",
              marginBottom: 12,
              fontSize: 22,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            View Course Details
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            An nec placerat repudiare scripserit, temporibus complectitur at
            sea, vel ignota fierent rreloquentiam id.
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            width: "33%",
          }}
        >
          <CardIcon>
            <ThumbUpIcon
              style={{
                fontSize: 50,
                position: "absolute",
                top: "25%",
                left: "25%",
              }}
            />
          </CardIcon>
          <div
            style={{
              color: "#fff",
              marginBottom: 12,
              fontSize: 22,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Apply, Enroll or Register
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            An nec placerat repudiare scripserit, temporibus complectitur at
            sea, vel ignota fierent rreloquentiam id.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
