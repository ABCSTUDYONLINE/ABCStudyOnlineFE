import React, { useEffect } from "react";
import Search from "./Search/search";
import { BlackText, CardButton } from "../../../globals/index";
import DropCategory from "./DropCategory/drop-category";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ApiGetCategories,
  ApiGetFavoriteCourse,
} from "../../../lib/redux/actions/courses";
import Avatar from "@material-ui/core/Avatar";
import DropHeart from "./DropHeart/drop-heart";
import DropCart from "./DropCart/drop-cart";

function Header() {
  const loginStatus = useSelector((state) => state.Authentication.loginStatus);
  const history = useHistory();

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Courses.categories);

  useEffect(() => {
    dispatch(ApiGetCategories(1, 10));
  }, []);

  // useEffect(() => {
  //     dispatch(ApiGetFavoriteCourse(accessToken,1,10));
  //     console.log("Favorites list: ",favoriteCourses)
  // }, [accessToken]);

  return (
    <div
      style={{
        display: "flex",
        padding: "30px 75px 15px 75px",
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ display: "flex", cursor: "pointer", alignItems: "center" }}
          onClick={() => {
            history.push("/");
            window.scrollTo({ top: 0 });
          }}
        >
          <img
            src="/assets/logo-team.png"
            alt=""
            style={{
              width: 60,
              height: 60,
              marginRight: 4,
              objectFit: "cover",
            }}
          />
          <BlackText style={{ fontSize: 32 }}>ABCStudy</BlackText>
        </div>
        <div style={{ marginLeft: 60 }}>
          <DropCategory />
        </div>
        <Search />
      </div>
      {!loginStatus ? (
        <CardButton
          onClick={() => {
            history.push("/login");
            window.scrollTo({ top: 0 });
          }}
        >
          Log In
        </CardButton>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <DropHeart />
          <DropCart />
          <Avatar
            src="/broken-image.jpg"
            style={{
              width: 50,
              height: 50,
              marginRight: 4,
              cursor: "pointer",
            }}
            onClick={() => {
              history.push("/myDashboardPage");
              window.scrollTo({ top: 0 });
            }}
          />
        </div>
      )}
    </div>
  );
}
export default Header;
