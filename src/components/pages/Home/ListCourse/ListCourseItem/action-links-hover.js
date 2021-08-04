import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  CardActionHover,
  CardActionReverseHover,
} from "../../../../../globals";
import { useDispatch, useSelector } from "react-redux";
import {
  ApiAddCourseToCart,
  ApiAddFavoriteCourse,
  ApiGetCoursesFromCart,
  ApiGetFavoriteCourses,
  ApiRemoveCourseFromCart,
  ApiRemoveFavoriteCourse,
} from "../../../../../lib/redux/actions/courses";
import { useHistory } from "react-router-dom";

function ActionLinksHover({ id }) {
  const favoriteCourses = useSelector((state) => state.Courses.favoriteCourses);
  const cart = useSelector((state) => state.Courses.cart);
  const history = useHistory();
  // const [isHeart, setIsHeart] = useState(
  //   favoriteCourses.some((favorite) => favorite.course.id === id)
  // );
  let loading = false;
  let loadingCart = false;
  const [isCart, setIsCart] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  const dispatch = useDispatch();
  let foundedCourse = favoriteCourses.find(
    (favorite) => favorite.course.id === id
  );
  let foundedCourseFromCart = cart.find(
    (cartItem) => cartItem.course.id === id
  );

  // setIsHeart(favoriteCourses.some((favorite) => favorite.course.id === id));

  const handleClickHeart = () => {
    console.log("Loading: ", loading);
    if (loading) {
      return;
    }
    if (accessToken === null) {
      history.push("/login");
      window.scrollTo({ top: 0 });
    }
    console.log("foundedCourse: ", foundedCourse);
    // if (!loading) {
    loading = true;
    if (foundedCourse) {
      dispatch(ApiRemoveFavoriteCourse(accessToken, foundedCourse.id)).then(
        (response) => {
          if (response?.status === 200) {
            loading = false;
            dispatch(ApiGetFavoriteCourses(accessToken, 1, 10));
          } else {
            console.log("action link remove error: ", response?.data.message);
          }
        }
      );
    } else {
      dispatch(ApiAddFavoriteCourse(accessToken, id)).then((response) => {
        if (response.status === 201) {
          loading = false;
          dispatch(ApiGetFavoriteCourses(accessToken, 1, 10));
        } else {
          console.log("action link add error: ", response.data.message);
        }
      });
    }
    // }
  };

  const handleClickCart = () => {
    console.log("loadingCart: ", loadingCart);
    if (loadingCart) {
      return;
    }
    if (accessToken === null) {
      history.push("/login");
      window.scrollTo({ top: 0 });
    }
    console.log("foundedCourseFromCart: ", foundedCourseFromCart);
    // if (!loading) {
    loadingCart = true;
    if (foundedCourseFromCart) {
      dispatch(
        ApiRemoveCourseFromCart(accessToken, foundedCourseFromCart.id)
      ).then((response) => {
        if (response?.status === 200) {
          loadingCart = false;
          dispatch(ApiGetCoursesFromCart(accessToken, "unpaid", 1, 10));
        } else {
          console.log("action link add error: ", response.data.message);
        }
      });
    } else {
      dispatch(ApiAddCourseToCart(accessToken, id)).then((response) => {
        if (response?.status === 201) {
          loadingCart = false;
          dispatch(ApiGetCoursesFromCart(accessToken, "unpaid", 1, 10));
        } else {
          console.log("action link remove error: ", response.data.message);
        }
      });
    }
  };

  return (
    <div
      className="action-links"
      style={{
        position: "absolute",
        top: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {foundedCourse ? (
        <CardActionReverseHover onClick={handleClickHeart}>
          <AiOutlineHeart title="Wishlist" />
        </CardActionReverseHover>
      ) : (
        <CardActionHover onClick={handleClickHeart}>
          <AiOutlineHeart title="Wishlist" />
        </CardActionHover>
      )}

      {foundedCourseFromCart ? (
        <CardActionReverseHover onClick={handleClickCart}>
          <ShoppingCartIcon title="Cart" />
        </CardActionReverseHover>
      ) : (
        <CardActionHover onClick={handleClickCart}>
          <ShoppingCartIcon title="Cart" />
        </CardActionHover>
      )}
    </div>
  );
}

export default ActionLinksHover;
