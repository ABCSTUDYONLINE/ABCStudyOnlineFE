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
  ApiGetFavoriteCourses,
  ApiRemoveFavoriteCourse,
} from "../../../../../lib/redux/actions/courses";

function ActionLinksHover({ id }) {
  const favoriteCourses = useSelector((state) => state.Courses.favoriteCourses);
  const [isHeart, setIsHeart] = useState(favoriteCourses.some((favorite) => favorite.course.id === id));
  const [isCart, setIsCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingCart, setLoadingCart] = useState(false);

  const accessToken = useSelector((state) => state.Authentication.accessToken);

  const dispatch = useDispatch();

  // setIsHeart(favoriteCourses.some((favorite) => favorite.course.id === id));

  const handleClickHeart = () => {
    console.log(
      "🚀 ~ file: action-links-hover.js ~ line 33 ~ handleClickHeart ~ favoriteCourses",
      favoriteCourses
    );
    let foundedCourse = favoriteCourses.find(
      (favorite) => favorite.course.id === id
    );
    if (!loading) {
      setLoading(true);
      if (isHeart) {
        dispatch(ApiRemoveFavoriteCourse(accessToken, foundedCourse.id)).then(
          (response) => {
            if (response?.status === 200) {
              setLoading(false);
              setIsHeart(!isHeart);
              dispatch(ApiGetFavoriteCourses(accessToken, 1, 10));
            } else {
              console.log("action link remove error: ", response?.data.message);
            }
          }
        );
      } else {
        dispatch(ApiAddFavoriteCourse(accessToken, id)).then((response) => {
          if (response.status === 201) {
            setLoading(false);
            setIsHeart(!isHeart);
            dispatch(ApiGetFavoriteCourses(accessToken, 1, 10));
          } else {
            console.log("action link add error: ", response.data.message);
          }
        });
      }
    }
  };

  const handleClickCart = () => {
    dispatch(ApiAddCourseToCart(accessToken, id));
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
      {!isHeart ? (
        <CardActionHover onClick={handleClickHeart}>
          <AiOutlineHeart title="Wishlist" />
        </CardActionHover>
      ) : (
        <CardActionReverseHover onClick={handleClickHeart}>
          <AiOutlineHeart title="Wishlist" />
        </CardActionReverseHover>
      )}
      {!isCart ? (
        <CardActionHover onClick={handleClickCart}>
          <ShoppingCartIcon title="Cart" />
        </CardActionHover>
      ) : (
        <CardActionReverseHover onClick={handleClickCart}>
          <ShoppingCartIcon title="Cart" />
        </CardActionReverseHover>
      )}
    </div>
  );
}

export default ActionLinksHover;
