import React from "react";
import { Grid } from "@material-ui/core";
import ListCourseItem from "../Home/ListCourse/ListCourseItem/list-course-item";

function Category() {
  const courses = [
    {
      id: 1,
      title: "Raque Professional IT Expert Certificate Course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: 200,
      requirement: ["gioi toan", "gioi tin"],
      learnWhat: [
        "Tự tin phát triển những ứng dụng Android, game Android",
        "Biết cách upload ứng dụng Android lên Google Play",
        "Kiếm tiền từ các ứng dụng trên Google Play",
        "ASO - tối ưu ứng dụng lên TOP tìm kiếm từ khoá",
      ],
      ratedPoint: 4.5,
      ratedNumber: 5,
      videoNumber: 6,
      studentNumber: 10,
    },
    {
      id: 2,
      title: "Raque Professional IT Expert Certificate Course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: 200,
      requirement: ["gioi toan", "gioi tin"],
      learnWhat: [
        "Tự tin phát triển những ứng dụng Android, game Android",
        "Biết cách upload ứng dụng Android lên Google Play",
        "Kiếm tiền từ các ứng dụng trên Google Play",
        "ASO - tối ưu ứng dụng lên TOP tìm kiếm từ khoá",
      ],
      ratedPoint: 4.5,
      ratedNumber: 5,
      videoNumber: 6,
      studentNumber: 10,
    },
    {
      id: 3,
      title: "Raque Professional IT Expert Certificate Course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: 200,
      requirement: ["gioi toan", "gioi tin"],
      learnWhat: [
        "Tự tin phát triển những ứng dụng Android, game Android",
        "Biết cách upload ứng dụng Android lên Google Play",
        "Kiếm tiền từ các ứng dụng trên Google Play",
        "ASO - tối ưu ứng dụng lên TOP tìm kiếm từ khoá",
      ],
      ratedPoint: 4.5,
      ratedNumber: 5,
      videoNumber: 6,
      studentNumber: 10,
    },
    {
      id: 4,
      title: "Raque Professional IT Expert Certificate Course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: 200,
      requirement: ["gioi toan", "gioi tin"],
      learnWhat: [
        "Tự tin phát triển những ứng dụng Android, game Android",
        "Biết cách upload ứng dụng Android lên Google Play",
        "Kiếm tiền từ các ứng dụng trên Google Play",
        "ASO - tối ưu ứng dụng lên TOP tìm kiếm từ khoá",
      ],
      ratedPoint: 4.5,
      ratedNumber: 5,
      videoNumber: 6,
      studentNumber: 10,
    },
    {
      id: 5,
      title: "Raque Professional IT Expert Certificate Course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: 200,
      requirement: ["gioi toan", "gioi tin"],
      learnWhat: [
        "Tự tin phát triển những ứng dụng Android, game Android",
        "Biết cách upload ứng dụng Android lên Google Play",
        "Kiếm tiền từ các ứng dụng trên Google Play",
        "ASO - tối ưu ứng dụng lên TOP tìm kiếm từ khoá",
      ],
      ratedPoint: 4.5,
      ratedNumber: 5,
      videoNumber: 6,
      studentNumber: 10,
    },
    {
      id: 6,
      title: "Raque Professional IT Expert Certificate Course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      price: 200,
      requirement: ["gioi toan", "gioi tin"],
      learnWhat: [
        "Tự tin phát triển những ứng dụng Android, game Android",
        "Biết cách upload ứng dụng Android lên Google Play",
        "Kiếm tiền từ các ứng dụng trên Google Play",
        "ASO - tối ưu ứng dụng lên TOP tìm kiếm từ khoá",
      ],
      ratedPoint: 4.5,
      ratedNumber: 5,
      videoNumber: 6,
      studentNumber: 10,
    },
  ];
  return (
    <div
      style={{
        paddingBottom: 70,
        paddingLeft: 75,
        paddingRight: 75,
      }}
    >
      <div>Category Filter</div>
      <Grid container spacing={0}>
        {courses.map((course) => {
          return (
            <Grid item xs={3}>
              <ListCourseItem
                key={course.id}
                style={{ maxWidth: 280 }}
                course={course}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default Category;
