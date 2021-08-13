import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Rating from "@material-ui/lab/Rating";
import { Box } from "@material-ui/core";
import { CardButton } from "../../../../../globals";
import { useDispatch } from "react-redux";
import { ApiRateCourse } from "../../../../../lib/redux/actions/courses";
import isEmpty from "validator/lib/isEmpty";

export default function CommentButton({ courseId, handleOpenDialog }) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(-1);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const [validationRatingMsg, setValidationRatingMsg] = useState("");
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  const handleClickOpen = () => {
    setRate(0);
    setComment("");
    setValidationMsg("");
    setOpen(true);
  };

  const handleCloseSubmit = () => {
    setValidationMsg("");
    setValidationRatingMsg("");
    if (isEmpty(comment)) {
      setValidationMsg("Please input comment");
      return;
    } else if (rate === 0) {
      setValidationRatingMsg("Please choose your rating");
      return;
    }
    dispatch(ApiRateCourse(accessToken, courseId, rate, comment)).finally(
      () => {
        console.log("FDSFDS");
        handleOpenDialog();
      }
    );
    setOpen(false);
  };
  const handleCloseCancel = () => {
    setOpen(false);
  };

  const labels = {
    1: "Useless+",
    2: "Poor+",
    3: "Ok+",
    4: "Good+",
    5: "Excellent+",
  };

  return (
    <div>
      <CardButton
        style={{
          borderRadius: 8,
          width: 100,
          height: 50,
          padding: 5,
          fontSize: 16,
          fontWeight: 500,
        }}
        onClick={handleClickOpen}
      >
        <div>Rate Course</div>
      </CardButton>
      <Dialog
        open={open}
        onClose={handleCloseCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ fontWeight: "bold" }} id="form-dialog-title">
          Rate Course
        </DialogTitle>
        <DialogContent>
          <Rating
            rating={rate}
            starRatedColor="#ffc107"
            precision={1}
            onChange={(event, newValue) => {
              setRate(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            style={{ fontSize: 45 }}
          />
          {rate !== null && (
            <Box ml={2}>{labels[hover !== -1 ? hover : rate]}</Box>
          )}
          {validationRatingMsg ? (
            <div
              style={{
                color: "#f44336",
                fontSize: 16,
                fontWeight: 400,
                margin: "4px 14px 0px 0px",
              }}
            >
              {validationRatingMsg}
            </div>
          ) : null}
          <TextField
            label="Your comment"
            variant="outlined"
            margin="dense"
            style={{ width: 500 }}
            value={comment}
            error={!!validationMsg}
            helperText={validationMsg || ""}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
