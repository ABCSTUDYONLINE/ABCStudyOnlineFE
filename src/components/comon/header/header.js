import React from "react";
import Search from "./Search/search";
import { CardButton } from "../../../globals/index";
import DropCategory from "./DropCategory/drop-category";

function Header() {
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
      <CardButton>Login In</CardButton>
    </div>
  );
}
export default Header;
