import React from "react";
import { Grid } from "@material-ui/core";
import ListCourseItem from "../Home/ListCourse/ListCourseItem/list-course-item";
import { CardFooterText } from "../../../globals";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useHistory } from "react-router-dom";


function Category() {
  let history = useHistory();
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
    <div>
      <div style={{ paddingTop: 160, height: 320, alignContent: 'flex-end', backgroundPosition: '50%', backgroundSize: 'cover', background: 'url("https://ednuv-ng.envytheme.com/page-title1.ba127805b954f8da1e9c.jpg")' }}>
        <div style={{ marginRight: 91, marginLeft: 91, display: 'flex', alignItems: 'center', }}>
          <CardFooterText
            style={{
              cursor: "pointer",
              marginLeft: 5,
              marginBottom: 0,
              marginTop: 30
            }}
            onClick={() => {
              history.push(`/`);
              window.scrollTo({ top: 0 });
            }}
          >
            Home
          </CardFooterText>
          <NavigateNextIcon style={{ marginTop: 30, color: '#ccc', marginRight: 8, marginLeft: 8 }} />
          <div style={{
            fontSize: 15,
            fontWeight: 400,
            color: "#ccc",
            marginTop: 30
          }} >
            Lap Trinh Game
          </div>
        </div>
        <div
          style={{ 
            fontSize: 42,
            fontWeight: 700,
            color: "#fff",
            marginRight: 91, marginLeft: 91,
          }}
        >{`Lap Trinh Game`}</div>
      </div>
      <div style={{
        paddingBottom: 70,
        paddingTop: 70
      }} >
        <Grid container spacing={0}>
          {courses.map((course) => {
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
      </div>
    </div>
  );
}
export default Category;
