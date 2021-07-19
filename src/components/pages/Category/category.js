import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ListCourseItem from "../Home/ListCourse/ListCourseItem/list-course-item";
import { CardFooterText, GrayText } from "../../../globals";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useHistory, useLocation } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";

function Category() {
  let history = useHistory();
  const location=useLocation();

  const [sort, setSort] = React.useState(0);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const courses = useSelector((state)=>state.Courses.topNewCourses);
  console.log("page category courses: ",courses);

  // Cho courses vao state
  const [page, setpage] = useState(1);
  const coursePerPage = 8;

  const courseToShow = courses.slice(
    (page - 1) * coursePerPage,
    page * coursePerPage
  );
  return (
    <div>
      <div
        style={{
          marginTop: 120,
          height: 320,
          alignContent: "flex-end",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          background:
            'url("https://ednuv-ng.envytheme.com/page-title4.3b9883c8a45ee489796f.jpg")',
        }}
      >
        <div
          style={{
            marginRight: 91,
            marginLeft: 91,
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardFooterText
            style={{
              cursor: "pointer",
              marginLeft: 5,
              marginBottom: 0,
              marginTop: 30,
            }}
            onClick={() => {
              history.push(`/`);
              window.scrollTo({ top: 0 });
            }}
          >
            Home
          </CardFooterText>
          <NavigateNextIcon
            style={{
              marginTop: 30,
              color: "#ccc",
              marginRight: 8,
              marginLeft: 8,
            }}
          />
          <div
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "#ccc",
              marginTop: 30,
            }}
          >
            Courses
          </div>
        </div>
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#fff",
            marginRight: 91,
            marginLeft: 91,
          }}
        >{location.state.sub.categoryName}</div>
      </div>
      <div
        style={{
          display: "flex",
          paddingTop: 80,
          paddingLeft: 91,
          paddingRight: 91,
          justifyContent:'space-between',
          alignItems:'center'
        }}
      >
        <div style={{fontSize:20,color:"#212529"}}>{`${'4'} results`}</div>
        <FormControl style={{ minWidth: 200 }}>
          <InputLabel htmlFor="age-native-simple">Sort</InputLabel>
          <Select
            native
            value={sort}
            onChange={handleChange}
            inputProps={{
              name: "sort",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={1}>Price low to high</option>
            <option value={2}>Score rate high to low</option>
            <option value={3}>Best selling</option>
          </Select>
        </FormControl>
      </div>
      <div
        style={{
          paddingBottom: 30,
          paddingTop: 30,
          paddingLeft: 91,
          paddingRight: 91,
        }}
      >
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 100,
        }}
      >
        <Pagination
          count={Math.ceil(courses.length / 8)}
          shape="rounded"
          onChange={(e, value) => {
            setpage(value);
          }}
        />
      </div>
    </div>
  );
}
export default Category;
