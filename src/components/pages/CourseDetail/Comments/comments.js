import React from "react";
import UserSectionItem from "./UserSectionItem/user-section-item";
import { BlackText } from "../../../../globals/index";

function Comments() {
  const temp = [1, 2, 3];
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
        3 Reviews
      </BlackText>
      {temp.map((i) => (
        <UserSectionItem key={temp[i]} />
      ))}
    </div>
  );
}
export default Comments;
