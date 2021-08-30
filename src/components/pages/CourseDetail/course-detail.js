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
  ApiChargeCourse,
  ApiGetCourseDetail,
  ApiGetCoursesFromCart,
  ApiPostLessonStatus,
} from "../../../lib/redux/actions/courses";

import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
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

  const [duration, setDuration] = useState(null);
  const [secondsElapsed, setSecondsElapsed] = useState(null);
  const [activeId, setActiveId] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const courseDetail = useSelector((state) => state.Courses.courseDetail);
  console.log("Course detail", courseDetail);
  const myDash = useSelector((state) => state.Courses.myDash);
  console.log("MYDASH: ", myDash);
  let foundedCourseFromDash = myDash?.find(
    (dashItem) => dashItem.course.id === courseDetail?.id
  );

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    dispatch(ApiGetCourseDetail(id)).then((response) => {
      if (response?.status === 200) {
        setLoading(false);
      }
    });
    if (myDash.length === 0) {
      console.log("empty dash");
      dispatch(ApiGetCoursesFromCart(accessToken, refreshToken, "paid", 1, 10));
    }
  }, []);

  let foundLessonStatus;
  const handleClickOpen = (url, id) => {
    console.log("next index: ", nextLesson, nextVideoIndex, nextTopicIndex);
    foundLessonStatus = foundedCourseFromDash?.studystatus?.lessonStatus.find(
      (lessonStatusItem) => lessonStatusItem.lessonId === id
    );
    console.log("foundLessonStatus ", foundLessonStatus);
    setOpen(true);
    if (foundLessonStatus?.timeRecord) {
      if (
        foundLessonStatus?.status === "seem" &&
        foundLessonStatus.timeRecord + 1 > duration
      ) {
        setVideoUrl(url);
      } else {
        setVideoUrl(`${url}#t=${foundLessonStatus.timeRecord}`);
      }
    } else {
      setVideoUrl(url);
    }
    setActiveId(id);
  };
  const handleClose = () => {
    if (foundedCourseFromDash) {
      console.log("duration in close: ", duration);

      dispatch(
        ApiPostLessonStatus(
          accessToken,
          refreshToken,
          foundedCourseFromDash?.studystatus?.id,
          courseDetail.topics[topicIndex].lessons[videoIndex].id,
          "seeing",
          secondsElapsed
        )
      ).finally(() => {
        console.log("send record time in close");
        dispatch(
          ApiGetCoursesFromCart(accessToken, refreshToken, "paid", 1, 10)
        );
      });
    }

    setActiveId("");
    setOpen(false);
  };
  const curTime = new Date();
  const expireTime = new Date(courseDetail?.promotion?.expireTime);

  const [videoIndex, setVideoIndex] = useState(-1);
  const [topicIndex, setTopicIndex] = useState(-1);
  const [nextLesson, setnextLesson] = useState({});
  const [nextVideoIndex, setNextVideoIndex] = useState(-1);
  const [nextTopicIndex, setNextTopicIndex] = useState(-1);

  console.log(" found MYDASH: ", foundedCourseFromDash);
  const chargeCourseStatus = useSelector(
    (state) => state.Courses.chargeCourseStatus
  );
  const learnIds = courseDetail?.id;
  const [openSignal, setOpenSignal] = React.useState(false);
  const handleOpenSignal = () => {
    console.log("learnIds in course detail: ", learnIds);
    console.log("accesstoken in course detail: ", accessToken);
    dispatch(ApiChargeCourse(accessToken, refreshToken, learnIds))
      .then((response) => {
        if (response?.status === 200) {
          dispatch(
            ApiGetCoursesFromCart(accessToken, refreshToken, "paid", 1, 10)
          );
        } else {
          console.log("remove cart add error: ", response?.data.message);
        }
      })
      .finally(() => {
        setOpenSignal(true);
      });
  };
  const handleCloseSignal = () => {
    setOpenSignal(false);
  };

  const onDuration = (temp) => {
    setDuration(temp);
    console.log("On Duration", temp);
    // this.p.seekTo(50 / this.state.duration);
  };
  const onProgress = (progress) => {
    if (!duration) {
      // Sadly we don't have the duration yet so we can't do anything
      return;
    }

    // progress.played is the fraction of the video that has been played
    // so multiply with duration to get number of seconds elapsed
    const secondsElapsedInFunc = progress.played * duration;

    if (secondsElapsedInFunc !== secondsElapsed) {
      setSecondsElapsed(secondsElapsedInFunc);
      console.log("secondsElapsed: ", secondsElapsed);
    }
  };
  const onEnded = () => {
    // if (courseDetail.topics[topicIndex].lessons[videoIndex + 1]) {
    //   setnextLesson(courseDetail.topics[topicIndex].lessons[videoIndex + 1]);
    //   setVideoIndex(videoIndex + 1);
    // } else if (courseDetail.topics[topicIndex + 1]) {
    //   setnextLesson(courseDetail.topics[topicIndex + 1].lessons[0]);
    //   setVideoIndex(0);
    //   setTopicIndex(topicIndex + 1);
    // } else {
    //   setVideoIndex(-1);
    //   setTopicIndex(-1);
    // }
    // if (nextVideoIndex === -1 || nextTopicIndex === -1) {
    //   return;
    // }

    if (foundedCourseFromDash) {
      console.log(
        "index : foundedCourseFromDash",
        videoIndex,
        foundedCourseFromDash
      );
      console.log("duration in end: ", duration);
      dispatch(
        ApiPostLessonStatus(
          accessToken,
          refreshToken,
          foundedCourseFromDash?.studystatus?.id,
          courseDetail.topics[topicIndex].lessons[videoIndex].id,
          "seem",
          secondsElapsed
        )
      ).finally(() => {
        console.log("send record time in end");
        dispatch(
          ApiGetCoursesFromCart(accessToken, refreshToken, "paid", 1, 10)
        );
      });

      if (videoIndex === 0 || foundedCourseFromDash) {
        console.log(
          "foundedCourseFromDash from next video",
          foundedCourseFromDash
        );
        foundLessonStatus =
          foundedCourseFromDash?.studystatus?.lessonStatus.find(
            (lessonStatusItem) => lessonStatusItem.lessonId === nextLesson.id
          );
        console.log("nexxt :", nextLesson.id, foundLessonStatus);

        if (foundLessonStatus?.timeRecord) {
          if (
            foundLessonStatus?.status === "seem" &&
            foundLessonStatus.timeRecord + 1 > duration
          ) {
            setVideoUrl(nextLesson.videoLink);
          } else {
            setVideoUrl(
              `${nextLesson.videoLink}#t=${foundLessonStatus.timeRecord}`
            );
          }
        } else {
          setVideoUrl(nextLesson.videoLink);
        }
        setActiveId(nextLesson.id);
      }
    }
  };
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
                        (courseDetail.fee *
                          (100 -
                            Number(
                              (courseDetail.promotion?.percent * 100).toFixed(0)
                            ) || 100)) /
                        100
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

                  <CardButton
                    style={{
                      borderRadius: 4,
                      background: foundedCourseFromDash ? "gray" : null,
                    }}
                    onClick={handleOpenSignal}
                  >
                    Buy Course
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
                topicIndex={topicIndex}
                setTopicIndex={setTopicIndex}
                videoIndex={videoIndex}
                setVideoIndex={setVideoIndex}
                duration={duration}
                secondsElapsed={secondsElapsed}
                setnextLesson={setnextLesson}
                setNextVideoIndex={setNextVideoIndex}
                setNextTopicIndex={setNextTopicIndex}
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
                    playing
                    config={{
                      file: {
                        attributes: {
                          disablepictureinpicture: "true",
                          controlsList: "nodownload",
                          onContextMenu: (e) => e.preventDefault(),
                        },
                      },
                    }}
                    onEnded={onEnded}
                    onDuration={onDuration}
                    onProgress={onProgress}
                    onPause={(e) => {
                      console.log("onPause", e);
                    }}
                  />
                  {courseDetail.topics.map((topic, indexFirst) => (
                    <div key={indexFirst}>
                      <RedText
                        style={{ fontSize: 18, fontWeight: 600, marginTop: 30 }}
                      >
                        {`Chapter ${indexFirst + 1}`}
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
                            key={index}
                            lesson={lesson}
                            index={index + 1}
                            handleClickOpen={(url, id) => {
                              // setFoundedLessonStatus(
                              //   foundedCourseFromDash?.studystatus?.lessonStatus.find(
                              //     (lessonStatusItem) =>
                              //       lessonStatusItem.lessonId === lesson.id
                              //   )
                              // );
                              if (duration) {
                                console.log("duration: ", duration);
                                dispatch(
                                  ApiPostLessonStatus(
                                    accessToken,
                                    refreshToken,
                                    foundedCourseFromDash?.studystatus?.id,
                                    courseDetail.topics[topicIndex].lessons[
                                      videoIndex
                                    ].id,
                                    "seeing",
                                    secondsElapsed
                                  )
                                ).finally(() => {
                                  console.log("send record time");
                                  dispatch(
                                    ApiGetCoursesFromCart(
                                      accessToken,
                                      refreshToken,
                                      "paid",
                                      1,
                                      10
                                    )
                                  );
                                });
                              }
                              if (topic.lessons[index + 1]) {
                                setnextLesson(topic.lessons[index + 1]);
                                setNextVideoIndex(videoIndex + 1);
                                setNextTopicIndex(indexFirst);
                              } else if (courseDetail.topics[topicIndex + 1]) {
                                setnextLesson(
                                  courseDetail.topics[topicIndex + 1].lessons[0]
                                );
                                setNextVideoIndex(0);
                                setNextTopicIndex(topicIndex + 1);
                              } else {
                                setNextVideoIndex(-1);
                                setNextTopicIndex(-1);
                              }
                              setTopicIndex(indexFirst);
                              setVideoIndex(index);

                              handleClickOpen(url, id);
                            }}
                            activeId={activeId}
                            foundedCourseFromDash={foundedCourseFromDash}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </DialogContent>
              </Dialog>
              <div style={{ textAlign: "center" }}>
                <Dialog
                  open={openSignal}
                  onClose={handleCloseSignal}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <DialogContentText
                      style={{
                        fontSize: 28,
                        fontWeight: 600,
                        color: "#252525",
                        textAlign: "center",
                        marginTop: 30,
                      }}
                      id="alert-dialog-description"
                    >
                      {foundedCourseFromDash
                        ? "Sorry, you  already purchase this course!!"
                        : chargeCourseStatus
                        ? "Buy course Successfully!!!"
                        : "Sorry, You don't have aenough money!!"}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleCloseSignal}
                      color="primary"
                      autoFocus
                    >
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
