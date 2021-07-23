import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Rating from "@material-ui/lab/Rating";
import { Box } from "@material-ui/core";

export default function FormComment({value,index}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(-1);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  return (
    <div role="tabpanel" hidden={value !== index} id={index}>
      {value === index && (
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            boxShadow: "0 8px 16px 0 rgb(146 184 255 / 20%)",
            marginTop: 5,
          }}
        >
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Rate Course
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle style={{ fontWeight: "bold" }} id="form-dialog-title">
              Rate Course
            </DialogTitle>
            <DialogContent>
              <Rating
                rating={rate}
                starRatedColor="#ffc107"
                precision={0.5}
                onChange={(event, newValue) => {
                  setRate(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                style={{ fontSize: 50 }}
              />
              {rate !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : rate]}</Box>
              )}
              <TextField
                label="Your comment"
                variant="outlined"
                margin="dense"
                style={{ width: 500 }}
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
}
