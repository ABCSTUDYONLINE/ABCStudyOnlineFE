import React from "react";
import {  useSelector } from "react-redux";
import { GrayText } from "../../../../../globals";
import TabCourseItem from "../TabCart/TabCourseItem/tab-course-item";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";

function TabDash({ value, index }) {
  const myDash = useSelector((state) => state.Courses.myDash);
  console.log("myDash: ",myDash);

  const rateCourseStatus = useSelector(
    (state) => state.Courses.rateCourseStatus
  );
  const [open, setOpen] = React.useState(false);
  const handleOpenDialog=()=>{
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
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
            display: "flex",
          }}
        >
          <div style={{ width: 900, marginLeft:40 }}>
            <div style={{padding:20,fontWeight:600,fontSize:22}}>{`${myDash?.length} courses in DashBoard`}</div>
            {myDash?.length!==0 ?
            <div>
              {myDash.map((course) => (
                <TabCourseItem course={course} isDashBoard={true} handleOpenDialog={handleOpenDialog} />
              ))}
            </div>
            :
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
                i
                src={"/assets/empty-box.png"}
                alt=""
              />
              <GrayText style={{ fontSize: 16 }}>
                You don't have any course in DashBoard
              </GrayText>
            </div>
}
          </div>
          <div style={{ textAlign: "center" }}>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >

              <DialogContent>
                <DialogContentText
                  style={{ fontSize: 28, fontWeight: 600, color: "#252525",textAlign:'center' }}
                  id="alert-dialog-description"
                >
                  {rateCourseStatus
                    ? "Rate Course Successfully!!!"
                    : "Rate Course Failed!"}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  );
}

export default TabDash;
