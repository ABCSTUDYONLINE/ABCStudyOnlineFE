import React, { useState } from "react";
// import { BlackText } from "../../../../../../globals/index";
import ListCourseItem from "../../../../Home/ListCourse/ListCourseItem/list-course-item";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

function PanelCourse() {
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

  // Cho courses vao state
  const [page, setpage] = useState(1);
  const coursePerPage = 4;

  const courseToShow = courses.slice(
    (page - 1) * coursePerPage,
    page * coursePerPage
  );

  return (
    <div style={{ marginTop: 30 }}>
      <Grid container spacing={0}>
        {courseToShow.map((course) => {
          return (
            <Grid item xs={3}>
              <ListCourseItem
                key={course.id}
                style={{ maxWidth: 360 }}
                course={course}
              />
            </Grid>
          );
        })}
      </Grid>
      <div style={{display:'flex',justifyContent:'center',paddingBottom:100}}>
      <Pagination
        count={Math.ceil(courses.length / 4)}
        shape="rounded"
        onChange={(e, value) => {
          setpage(value);
        }}
        
      />
      </div>
    </div>
  );
}
export default PanelCourse;
