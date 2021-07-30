import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import { CardButton } from "../../../../../../globals/index";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "validator/lib/isEmpty";
import { ApiChangePassword } from "../../../../../../lib/redux/actions/account-management";

function AccountDetailPanel({ value, index, content }) {
  const userInfo = useSelector((state)=>state.Authentication.userInfo);
  const [firstName,setFirstName]=useState(userInfo.data.firstName);
  const [email,setEmail]=useState(userInfo.data.email);
  const [phoneNumber,setPhoneNumber]=useState(userInfo.data.phoneNumber);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState({});

  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  console.log("userInfo: ",userInfo);

  const onSubmitSaveChanges = () => {
    if (
      currentPassword === "" &&
      newPassword === "" &&
      confirmNewPassword === ""
    ) {
      setValidationMsg({});
      console.log("change profile");
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
      dispatch(
        ApiChangePassword(accessToken, currentPassword, newPassword)
      ).then((response) => {
        if (response?.status === 200 && response?.data.data !== null) {
          console.log("Show diaglog Change password thanh cong");
          setCurrentPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
        }
        console.log("notify",response?.data.message)
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
            label="Full Name"
            defaultValue=""
            variant="outlined"
            value={firstName}
            style={{ width: "100%" }}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
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
        </div>
      )}
    </div>
  );
}
export default AccountDetailPanel;
