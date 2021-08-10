import React, { useEffect, useState } from "react";
import {
  BlackText,
  GrayText,
  RedText,
  CardButtonText,
  CardButton,
  CardFooterText,
} from "../../../globals";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import StarRatings from "react-star-ratings";
import CourseAdditionalInformation from "./CourseAdditionalInformation/course-additional-information";
import InstructorSection from "./InstructorSection/instructor-section";
import Comments from "./Comments/comments";
import RelatedCourses from "./RelatedCourses/related-courses";
import CourseContent from "./CourseContent/course-content";
import { useHistory, useLocation, useParams } from "react-router-dom";

import ReactPlayer from "react-player";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import LessonItem from "./CourseContent/LessonItem/lesson-item";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import {
  ApiGetCourseDetail,
  ApiGetCoursesFromCart,
} from "../../../lib/redux/actions/courses";

import { CircularProgress } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

function CourseDetail() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [activeId, setActiveId] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const courseDetail = useSelector((state) => state.Courses.courseDetail);
  console.log("Course detail", courseDetail);

  useEffect(() => {
    dispatch(ApiGetCourseDetail(id)).then((response) => {
      if (response?.status === 200) {
        setLoading(false);
      }
    });
  }, []);

  const handleClickOpen = (url, id) => {
    setOpen(true);
    setVideoUrl(url);
    setActiveId(id);
  };
  const handleClose = () => {
    setActiveId("");
    setOpen(false);
  };
  const curTime = new Date();
  const expireTime = new Date(courseDetail?.promotion?.expireTime);
  const myDash=useSelector((state)=>state.Courses.myDash)
  console.log("MYDASH: ",myDash);
  let foundedCourseFromDash = myDash?.find(
    (dashItem) => dashItem.course.id === courseDetail?.id
  );
  
  console.log(" found MYDASH: ",foundedCourseFromDash);
  return (
    <div>
      {loading ? (
        <div
          style={{
            height: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div
            style={{
              marginTop: 100,
              alignContent: "flex-end",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              background:
                'url("https://ednuv-ng.envytheme.com/page-title4.3b9883c8a45ee489796f.jpg")',
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "40vh",
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
                {courseDetail.courseName}
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
              Courses
            </div>
          </div>
          <div
            style={{
              paddingBottom: 70,
              paddingLeft: 75,
              paddingRight: 75,
              paddingTop: 70,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <div style={{ width: "70%" }}>
                <div>
                  <BlackText
                    style={{
                      fontSize: 29,
                      fontWeight: 700,
                      marginBottom: 12,
                    }}
                  >
                    {courseDetail.courseName}
                  </BlackText>
                  <GrayText style={{ fontSize: 15, color: "#727965" }}>
                    {courseDetail.shortCourseDescription}
                  </GrayText>
                </div>
                <div style={{ marginTop: 20 }}>
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FolderOpenOutlinedIcon
                        style={{ color: "#cfcfcf", fontSize: 25 }}
                      ></FolderOpenOutlinedIcon>
                      <div
                        style={{
                          paddingLeft: 10,
                          paddingRight: 20,
                          borderRight: "1px solid #eee ",
                        }}
                      >
                        <RedText style={{ fontSize: 14, fontWeight: 600 }}>
                          CATEGORY
                        </RedText>
                        <CardButtonText
                          style={{
                            cursor: "pointer",
                            fontSize: 16,
                            fontWeight: 500,
                            margin: 0,
                          }}
                        >
                          {courseDetail.category.categoryName}
                        </CardButtonText>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <PermIdentityIcon
                        style={{
                          color: "#cfcfcf",
                          fontSize: 25,
                          paddingLeft: 20,
                        }}
                      ></PermIdentityIcon>
                      <div
                        style={{
                          paddingLeft: 10,
                          paddingRight: 20,
                          borderRight: "1px solid #eee ",
                        }}
                      >
                        <RedText style={{ fontSize: 14, fontWeight: 600 }}>
                          STUDENT ENROLLED
                        </RedText>
                        <CardButtonText
                          style={{
                            cursor: "pointer",
                            fontSize: 16,
                            fontWeight: 500,
                            margin: 0,
                          }}
                        >
                          {courseDetail.studies}
                        </CardButtonText>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <DateRangeOutlinedIcon
                        style={{
                          color: "#cfcfcf",
                          fontSize: 25,
                          paddingLeft: 20,
                        }}
                      ></DateRangeOutlinedIcon>
                      <div
                        style={{
                          paddingLeft: 10,
                        }}
                      >
                        <RedText style={{ fontSize: 14, fontWeight: 600 }}>
                          LAST UPDATED
                        </RedText>
                        <CardButtonText
                          style={{
                            cursor: "pointer",
                            fontSize: 16,
                            fontWeight: 500,
                            margin: 0,
                          }}
                        >
                          {courseDetail.updatedAt.slice(0, 10)}
                        </CardButtonText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{}}>
                <div
                  style={{
                    display: "flex",
                    textAlign: "end",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <StarRatings
                    rating={courseDetail.rates.rate}
                    starRatedColor="#ffc107"
                    numberOfStars={5}
                    starDimension="16px"
                    starSpacing="2px"
                  />
                  <GrayText
                    style={{
                      marginLeft: 4,
                      color: "#727965",
                    }}
                  >
                    {`(${courseDetail.rates.total} reviews)`}
                  </GrayText>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {courseDetail.promotion && expireTime >= curTime ? (
                    <div
                      style={{
                        color: "#81868a",
                        textDecoration: "line-through",
                        fontSize: 35,
                        fontWeight: 600,
                        marginRight: 10,
                      }}
                    >{`$${courseDetail.fee}`}</div>
                  ) : null}
                  {courseDetail.promotion && expireTime >= curTime ? (
                    <BlackText
                      style={{
                        fontSize: 35,
                        fontWeight: 600,
                        marginRight: 10,
                      }}
                    >
                      {`$${
                        (courseDetail.fee * (100-courseDetail.promotion?.percent*100 || 100))/100
                      }`}
                    </BlackText>
                  ) : (
                    <BlackText
                      style={{
                        fontSize: 35,
                        fontWeight: 600,
                        marginRight: 10,
                      }}
                    >
                      {`$${courseDetail.fee}`}
                    </BlackText>
                  )}

                  <CardButton style={{ borderRadius: 4 }}>
                    <div>Buy Course</div>
                  </CardButton>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  justifyContent: "space-between",
                  paddingRight: 60,
                  maxWidth: 1000,
                }}
              >
                <CourseAdditionalInformation course={courseDetail} />
                <InstructorSection teacher={courseDetail.teacher} />
                <Comments courseId={courseDetail.id} />
                <RelatedCourses
                  caseTitle={"Related Courses"}
                  relatedCourses={courseDetail?.courses}
                />
              </div>
              <CourseContent
                course={courseDetail}
                handleClickOpen={handleClickOpen}
                activeId={activeId}
                foundedCourseFromDash={foundedCourseFromDash}
              />
              <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  {courseDetail.courseName}
                </DialogTitle>
                <DialogContent dividers>
                  <ReactPlayer
                    url={videoUrl}
                    width="100%"
                    height="100%"
                    controls
                  />
                  {courseDetail.topics.map((topic, index) => (
                    <div key={index}>
                      <RedText
                        style={{ fontSize: 18, fontWeight: 600, marginTop: 30 }}
                      >
                        {`Chapter ${++index}`}
                      </RedText>
                      <BlackText
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        {topic.topicName}
                      </BlackText>
                      <div style={{ marginTop: 20 }}>
                        {topic.lessons.map((lesson, index) => (
                          <LessonItem
                            key={++index}
                            lesson={lesson}
                            index={++index}
                            handleClickOpen={handleClickOpen}
                            activeId={activeId}
                            foundedCourseFromDash={foundedCourseFromDash}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
