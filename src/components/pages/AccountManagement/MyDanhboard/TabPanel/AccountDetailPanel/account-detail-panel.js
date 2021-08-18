import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import { CardButton } from "../../../../../../globals/index";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "validator/lib/isEmpty";
import {
  ApiChangePassword,
  ApiChangeProfile,
} from "../../../../../../lib/redux/actions/account-management";
import isEmail from "validator/lib/isEmail";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";

function AccountDetailPanel({ value, index }) {
  const userInfo = useSelector((state) => state.Authentication.userInfo);
  const [firstName, setFirstName] = useState(userInfo?.firstName);
  const [lastName, setLastName] = useState(userInfo?.lastName);
  const [email, setEmail] = useState(userInfo?.email);
  const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber);
  const [address, setAddress] = useState(userInfo?.address);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState({});

  useEffect(() => {
    setFirstName(userInfo?.firstName);
    setLastName(userInfo?.lastName);
    setEmail(userInfo?.email);
    setPhoneNumber(userInfo?.phoneNumber);
    setAddress(userInfo?.address);
  }, [userInfo]);

  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  
  const refreshToken = localStorage.getItem("refreshToken");
  const changeProfileStatus = useSelector(
    (state) => state.AccountManagement.changeProfileStatus
  );

  console.log("userInfo: ", userInfo);
  const changePasswordStatus = useSelector(
    (state) => state.AccountManagement.changePasswordStatus
  );

  const [openProfile, setOpenProfile] = React.useState(false);

  const handleCloseProfle = () => {
    setOpenProfile(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitSaveChanges = () => {
    if (
      currentPassword === "" &&
      newPassword === "" &&
      confirmNewPassword === ""
    ) {
      setValidationMsg({});
      console.log("change profile");

      const msg = {};

      if (isEmpty(firstName)) {
        msg.firstName = "Please input your first name";
      }
      if (isEmpty(lastName)) {
        msg.lastName = "Please input your last name";
      }

      if (isEmpty(email)) {
        msg.email = "Please input your Email";
      } else if (!isEmail(email)) {
        msg.email = "Your email is incorrect";
      }
      if (isEmpty(phoneNumber)) {
        msg.phoneNumber = "Please input your phone Number";
      }
      if (isEmpty(address)) {
        msg.address = "Please input your Address";
      }
      setValidationMsg(msg);
      if (Object.keys(msg).length > 0) {
        return;
      }
      dispatch(
        ApiChangeProfile(
          accessToken,
          refreshToken,
          firstName,
          lastName,
          email,
          phoneNumber,
          address
        )
      )
        .then((response) => {
          if (response?.status === 200 && response?.data.data !== null) {
            setValidationMsg({});
          }
        })
        .finally(() => {
          setOpenProfile(true);
        });
    } else {
      const msg = {};
      if (isEmpty(currentPassword)) {
        msg.currentPassword = "Please input your password";
      }
      if (isEmpty(newPassword)) {
        msg.currentPassword = "Please input new password";
      }
      if (isEmpty(confirmNewPassword)) {
        msg.currentPassword = "Please input confirm new password";
      }
      if (newPassword !== confirmNewPassword) {
        msg.confirmNewPassword = "Confirm Password doesn't match new Password";
      }
      setValidationMsg(msg);
      if (Object.keys(msg).length > 0) {
        return;
      }
      dispatch(ApiChangePassword(accessToken,refreshToken, currentPassword, newPassword))
        .then((response) => {
          if (response?.status === 200 && response?.data.data !== null) {
            console.log("Show diaglog Change password thanh cong");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmNewPassword("");

            setValidationMsg({});
          } else {
            console.log("notify", response?.data.message);
          }
        })
        .finally(() => {
          setOpen(true);
        });
    }
  };

  return (
    <div role="tabpanel" hidden={value !== index} id={index}>
      {value === index && (
        <div
          style={{
            backgroundColor: "#fff",
            padding: 40,
            borderRadius: 5,
            boxShadow: "0 8px 16px 0 rgb(146 184 255 / 20%)",
            marginTop: 5,
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="First Name"
            defaultValue=""
            variant="outlined"
            value={firstName}
            style={{ width: "100%" }}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            error={!!validationMsg.firstName}
            helperText={validationMsg.firstName || ""}
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            defaultValue=""
            variant="outlined"
            value={lastName}
            style={{ width: "100%", marginTop: 30 }}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            error={!!validationMsg.lastName}
            helperText={validationMsg.lastName || ""}
          />
          <TextField
            required
            id="outlined-required"
            label="Email address"
            defaultValue=""
            variant="outlined"
            value={email}
            style={{ width: "100%", marginTop: 30 }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={!!validationMsg.email}
            helperText={validationMsg.email || ""}
          />
          <TextField
            required
            id="outlined-required"
            label="Phone number"
            defaultValue="0123456789"
            variant="outlined"
            value={phoneNumber}
            style={{ width: "100%", marginTop: 30 }}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            error={!!validationMsg.phoneNumber}
            helperText={validationMsg.phoneNumber || ""}
          />
          <TextField
            required
            id="outlined-required"
            label="Address"
            defaultValue=""
            variant="outlined"
            value={address}
            style={{ width: "100%", marginTop: 30 }}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            error={!!validationMsg.address}
            helperText={validationMsg.address || ""}
          />
          <Typography
            style={{
              marginTop: 40,
              marginBottom: 25,
              color: "#727695",
              fontSize: 20,
              fontWeight: 500,
              width: "100%",
            }}
          >
            Password Change
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <TextField
              id="outlined-helperText"
              type="password"
              label="Current password"
              defaultValue=""
              variant="outlined"
              style={{ width: "49%" }}
              value={currentPassword}
              error={!!validationMsg.currentPassword}
              helperText={
                validationMsg.currentPassword ||
                "leave blank to leave unchanged"
              }
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
            />
            <TextField
              id="outlined-helperText"
              type="password"
              label="New password"
              defaultValue=""
              variant="outlined"
              style={{ width: "49%" }}
              value={newPassword}
              error={!!validationMsg.newPassword}
              helperText={
                validationMsg.newPassword || "leave blank to leave unchanged"
              }
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>
          <TextField
            id="outlined-helperText"
            type="password"
            label="Confirm new password"
            defaultValue=""
            variant="outlined"
            style={{ width: "100%", marginTop: 30 }}
            error={!!validationMsg.confirmNewPassword}
            helperText={
              validationMsg.confirmNewPassword ||
              "leave blank to leave unchanged"
            }
            value={confirmNewPassword}
            onChange={(e) => {
              setConfirmNewPassword(e.target.value);
            }}
          />

          <CardButton
            style={{
              borderRadius: 32,
              marginTop: 40,
              boxShadow: "0 5px 28.5px 1.5px rgb(255 25 73 / 10%)",
              fontSize: 16,
              fontWeight: 700,
            }}
            onClick={onSubmitSaveChanges}
          >
            Save Changes
          </CardButton>
          <div style={{ textAlign: "center" }}>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              {changePasswordStatus ? (
                <CheckCircleIcon
                  style={{
                    fontSize: 100,
                    marginTop: 20,
                    color: "#0eb582",
                    alignSelf: "center",
                  }}
                />
              ) : null}

              <DialogContent>
                <DialogContentText
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#252525",
                    textAlign: "center",
                  }}
                  id="alert-dialog-description"
                >
                  {changePasswordStatus
                    ? "Update password successfully!!!"
                    : "your password not true! Please check it again!"}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div style={{ textAlign: "center" }}>
            <Dialog
              open={openProfile}
              onClose={handleCloseProfle}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              {changeProfileStatus ? (
                <CheckCircleIcon
                  style={{
                    fontSize: 100,
                    marginTop: 20,
                    color: "#0eb582",
                    alignSelf: "center",
                  }}
                />
              ) : null}

              <DialogContent>
                <DialogContentText
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#252525",
                    textAlign: "center",
                  }}
                  id="alert-dialog-description"
                >
                  {changeProfileStatus
                    ? "Update profile successfully!!!"
                    : "Update profile failed!"}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseProfle} color="primary" autoFocus>
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
export default AccountDetailPanel;
