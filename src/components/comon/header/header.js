import React from "react";
import Search from "./Search/search";
import { CardButton } from "../../../globals/index";
import DropCategory from "./DropCategory/drop-category";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Header() {
  const temp = false;
  return (
    <div
      style={{
        display: "flex",
        padding: "30px 75px 30px 75px",
        justifyContent: "space-between",
        zIndex: 2010,
        background: "white",
        right: 0,
        left: 0,
        top: 0,
        alignItems: "center",
        boxShadow: "0 0 40px 3px rgb(0 0 0 / 4%)",
        position: "fixed",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>Logo Team</div>
        <div style={{ marginLeft: 60 }}>
          <DropCategory />
        </div>
        <Search />
      </div>
      {temp ? (
        <CardButton>Log In</CardButton>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <FavoriteBorderIcon
            style={{
              fontSize: 30,
              marginRight: 10,
              color: "#ff1949",
              cursor: "pointer",
            }}
          ></FavoriteBorderIcon>
          <img
            src="/assets/user1.jpg"
            alt=""
            style={{
              width: 50,
              height: 50,
              marginRight: 4,
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </div>
      )}
    </div>
  );
}
export default Header;
