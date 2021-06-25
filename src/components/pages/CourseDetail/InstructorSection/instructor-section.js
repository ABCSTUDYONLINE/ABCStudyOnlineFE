import React from "react";
import { BlackText, CardButton } from "../../../../globals/index";

function InstructorSection() {
  return (
    <div style={{ marginTop: 30 }}>
      <div>
        <BlackText
          style={{
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Meet your instructors
        </BlackText>
      </div>
      <div style={{ marginTop: 15, background: "#f8f8f8", borderRadius: 5 }}>
        <div
          style={{
            backgroundImage: `url("https://ednuv-ng.envytheme.com/bg.2995f3a7365f013d1c75.jpg")`,
            height: 115,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            borderRadius: "5px 5px 0 0",
          }}
        ></div>
        <div style={{ padding: "0 25px 25px", marginTop: -45 }}>
          <img
            src="/assets/user1.jpg"
            alt=""
            style={{
              width: 100,
              height: 100,
              border: "3px solid '#fff",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <BlackText
                style={{ fontSize: 17, fontWeight: 600, marginBottom: 5 }}
              >
                James Anderson
              </BlackText>
              <BlackText
                style={{ fontSize: 14, fontWeight: 400, color: "#0eb582" }}
              >
                Photographer, Author, Teacher
              </BlackText>
            </div>
            <CardButton style={{ borderRadius: 4 }}>
              <div>View Profile on Academy</div>
            </CardButton>
          </div>
          <BlackText
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "#727695",
              marginTop: 15,
            }}
          >
            James Anderson is a celebrated photographer, author, and teacher who
            brings passion to everything he does.
          </BlackText>
        </div>
      </div>
    </div>
  );
}
export default InstructorSection;
