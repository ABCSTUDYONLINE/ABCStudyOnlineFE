import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import {
  CardActionHover,
  CardActionReverseHover,
} from "../../../../../globals";
import { useDispatch, useSelector } from "react-redux";
import {
  ApiAddFavoriteCourse,
  ApiGetFavoriteCourses,
  ApiRemoveFavoriteCourse,
} from "../../../../../lib/redux/actions/courses";

function ActionLinksHover({ id }) {
  const [isHeart, setIsHeart] = useState(false);

  const favoriteCourses = useSelector((state) => state.Courses.favoriteCourses);
  const accessToken = useSelector((state) => state.Authentication.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsHeart(favoriteCourses.some((favorite) => favorite.course.id === id));
  }, []);

  const handleClickHeart = () => {
    if (isHeart) {
      dispatch(ApiRemoveFavoriteCourse(accessToken, id)).then((response) => {
        if (response.status === 200) {
          setIsHeart(!isHeart);
          dispatch(ApiGetFavoriteCourses(accessToken, 1, 10));
        } else {
          console.log("action link remove error: ", response.data.message);
        }
      });
    } else {
      dispatch(ApiAddFavoriteCourse(accessToken, id)).then((response) => {
        if (response.status === 201) {
          setIsHeart(!isHeart);
          dispatch(ApiGetFavoriteCourses(accessToken, 1, 10));
        } else {
          console.log("action link add error: ", response.data.message);
        }
      });
    }
  };

  const handleClickSync = () => {};

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
        <CardActionHover>
          <AiOutlineHeart title="Wishlist" onClick={handleClickHeart} />
        </CardActionHover>
      ) : (
        <CardActionReverseHover>
          <AiOutlineHeart title="Wishlist" onClick={handleClickHeart} />
        </CardActionReverseHover>
      )}
      <CardActionHover>
        <CardMembershipIcon title="Assign" onClick={handleClickSync} />
      </CardActionHover>
    </div>
  );
}

export default ActionLinksHover;