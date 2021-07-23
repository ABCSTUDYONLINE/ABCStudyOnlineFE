import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import ListCourseItem from "../Home/ListCourse/ListCourseItem/list-course-item";
import { CardFooterText, GrayText } from "../../../globals";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { useSelector, useDispatch } from "react-redux";
import {
  ApiGetDetailCategory,
  ApiSearchCourses,
} from "../../../lib/redux/actions/courses";
import { CircularProgress } from "@material-ui/core";

function Category() {
  let history = useHistory();
  const dispatch = useDispatch();
  const location=useLocation();

  const [sort, setSort] = React.useState(0);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const { categoryName, keyWord } = useParams();
  console.log("keyWord : ", keyWord);
  console.log("categoryName : ", categoryName);
  // dispatch(ApiGetDetailCategory(id));

  let listCoursesBySearch = useSelector(
    (state) => state.Courses.listCoursesBySearch
  );
  console.log("listCoursesBySearch: ", listCoursesBySearch);

  // const topNewCourses = useSelector((state) => state.Courses.topNewCourses);
  // const topRegisterCourses = useSelector(
  //   (state) => state.Courses.topRegisterCourses
  // );
  // const topRateInWeek = useSelector((state) => state.Courses.topRateInWeek);

  useEffect(() => {
    if(!keyWord){
      console.log("log loaction",location.state.title);
    }
    else if (keyWord === "category") {
      dispatch(ApiSearchCourses("category", categoryName, 1, 10));
    }
    else{
      dispatch(ApiSearchCourses("name", keyWord, 1, 10));
    }
  }, [keyWord,categoryName]);

  // Cho courses vao state
  const [page, setpage] = useState(1);
  const coursePerPage = 8;

  const courseToShow = listCoursesBySearch?.slice(
    (page - 1) * coursePerPage,
    page * coursePerPage
  );
  return (
    <div>
      <div
        style={{
          marginTop: 120,
          alignContent: "flex-end",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          background:
            'url("https://ednuv-ng.envytheme.com/page-title4.3b9883c8a45ee489796f.jpg")',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "50vh",
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
        >
          {categoryName ? categoryName : `Search keyword ${keyWord}`}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          paddingTop: 80,
          paddingLeft: 91,
          paddingRight: 91,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 20, color: "#212529" }}>{`${listCoursesBySearch?.length} results`}</div>
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
      {!listCoursesBySearch || listCoursesBySearch?.length === 0 ? (
        <div
          style={{
            height: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : listCoursesBySearch?.length === 0 ? (
        <div
          style={{
            padding: "20px 30px 20px 30px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              width: 100,
              height: 100,
            }}
            src={"/assets/empty-box.png"}
            alt=""
          />
          <GrayText style={{ fontSize: 16, marginTop: 10 }}>
            Nothing to show
          </GrayText>
        </div>
      ) : (
        <div>
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
              count={Math.ceil(listCoursesBySearch.length / 8)}
              shape="rounded"
              onChange={(e, value) => {
                setpage(value);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Category;
