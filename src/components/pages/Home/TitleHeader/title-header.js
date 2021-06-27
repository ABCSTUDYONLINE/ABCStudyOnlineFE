import { CircularProgress, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlackText, CardButton, RedText } from "../../../../globals";
import { getCurrentTodo, getTodos } from "../../../../lib/redux/actions/course";

function TitleHeader({ title }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.Course.todos);

  useEffect(() => {
    dispatch(getCurrentTodo(1));
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

      {!todos ? (
        <CircularProgress />
      ) : todos?.length === 0 ? (
        <Typography> Khong co thong tin de hien thi</Typography>
      ) : (
        todos.map((todo) => <Typography>{todo?.title}</Typography>)
      )}

      <BlackText>{title}</BlackText>
      <CardButton
        style={{
          position: "absolute",
          right: 0,
          top: "10%",
        }}
      >
        <div>View Courses</div>
      </CardButton>
    </div>
  );
}
export default TitleHeader;
