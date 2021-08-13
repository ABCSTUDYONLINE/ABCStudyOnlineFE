
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BlackText, CardButton, RedText } from "../../../../globals";

function TitleHeader({ title }) {
  const history=useHistory();

  useEffect(() => {
    // dispatch(getCurrentTodo(1));
  }, []);

  return (
    <div
      style={{
        position: "relative",
        padding: "0px 10px 0px 10px",
        marginBottom: 30,
      }}
    >
      <RedText style={{ marginBottom: 10 }}>DISCOVER COURSES</RedText>

      <BlackText>{title}</BlackText>
      <CardButton
        style={{
          position: "absolute",
          right: 0,
          top: "10%",
        }}
        onClick={()=>{
          history.push("/search",{title:title})
          window.scrollTo({ top: 0 });
        }}
      >
        <div>View Courses</div>
      </CardButton>
    </div>
  );
}
export default TitleHeader;
