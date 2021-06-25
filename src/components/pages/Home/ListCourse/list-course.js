import React from "react";
import TitleHeader from "../TitleHeader/title-header";
import ListCourseItem from "./ListCourseItem/list-course-item";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ListCourse({ title }) {
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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      style={{
        paddingBottom: 70,
        paddingLeft: 75,
        paddingRight: 75,
      }}
    >
      <TitleHeader title={title} />

      <Carousel responsive={responsive} showDots={true}>
        {courses.map((course) => (
          <ListCourseItem key={course.id} course={course} />
        ))}
      </Carousel>
    </div>
  );
}
export default ListCourse;
