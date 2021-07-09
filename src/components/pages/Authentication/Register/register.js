import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
  BlackText,
  CardButton,
  CardButtonText,
  ForgotPassword,
  GrayText,
} from "../../../../globals";
import isEmpty from "validator/lib/isEmpty";
import { useHistory } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import { useDispatch, useSelector } from "react-redux";
import {
  ApiRegister,
  ApiSendEmail,
} from "../../../../lib/redux/actions/authentication";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validationMsg, setValidationMsg] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.Authentication.userInfo);
  let history = useHistory();
  const registerStatus = useSelector(
    (state) => state.Authentication.registerSuccess
  );

  const validateAll = () => {
    const msg = {};
    if (isEmpty(firstName)) {
      msg.firstName = "Please input your first name";
    }
    if (isEmpty(lastName)) {
      msg.lastName = "Please input your last name";
    }
    if (isEmpty(username)) {
      msg.username = "Please input your username";
    }
    if (isEmpty(password)) {
      msg.password = "Please input your Password";
    }
    if (isEmpty(confirmPassword)) {
      msg.confirmPassword = "Please confirm your Password";
    }
    if (isEmpty(email)) {
      msg.email = "Please input your Email";
    } else if (!isEmail(email)) {
      msg.email = "Your email is incorrect";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmitRegister = () => {
    const isValid = validateAll();
    if (!isValid) return;
    dispatch(
      ApiRegister(
        firstName,
        lastName,
        username,
        password,
        email,
        phoneNumber,
        address
      )
    ).then(() => {
      dispatch(ApiSendEmail(email)).then(() => {
        history.push("/verify");
      });
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <img
        src="/assets/register-bg.jpg"
        alt=""
        style={{
          height: "auto",
          width: "50%",
        }}
      />
      <div style={{ width: "50%", padding: 60, textAlign: "center" }}>
        <BlackText>LOGO Team</BlackText>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BlackText
            style={{
              fontSize: 35,
              fontWeight: 700,
              marginTop: 30,
              flexWrap: "wrap",
              maxWidth: 450,
              textAlign: "center",
            }}
          >
            Open up your Academy Account now
          </BlackText>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
            fontSize: 15,
          }}
        >
          <GrayText>Aldready signed up?</GrayText>
          <CardButtonText
            style={{
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Log in
          </CardButtonText>
        </div>
        <form style={{ marginTop: 32 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <TextField
              margin="dense"
              label="First name"
              defaultValue=""
              variant="outlined"
              style={{ width: "49%" }}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              error={!!validationMsg.firstName}
              helperText={validationMsg.firstName || ""}
            />
            <TextField
              margin="dense"
              label="Last name"
              defaultValue=""
              variant="outlined"
              style={{ width: "49%" }}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              error={!!validationMsg.lastName}
              helperText={validationMsg.lastName || ""}
            />
          </div>
          <TextField
            label="Username"
            variant="outlined"
            margin="dense"
            fullWidth
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            error={!!validationMsg.username}
            helperText={validationMsg.username || ""}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="dense"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={!!validationMsg.password}
            helperText={validationMsg.password || ""}
          />
          <TextField
            label="Confirm password"
            variant="outlined"
            margin="dense"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            error={!!validationMsg.confirmPassword}
            helperText={validationMsg.confirmPassword || ""}
          />
          {}
          <TextField
            label="Your email address"
            variant="outlined"
            margin="dense"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={!!validationMsg.email}
            helperText={validationMsg.email || ""}
          />
          <TextField
            label="Phone number"
            variant="outlined"
            margin="dense"
            fullWidth
            id="filled-number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            error={!!validationMsg.phoneNumber}
            helperText={validationMsg.phoneNumber || ""}
          />
          <TextField
            label="Your Address"
            variant="outlined"
            margin="dense"
            fullWidth
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          <CardButton
            style={{
              width: "100%",
              marginTop: 4,
              borderRadius: 4,
              fontSize: 15,
            }}
            type="button"
            onClick={onSubmitRegister}
          >
            Sign Up
          </CardButton>
        </form>
      </div>
    </div>
  );
}
export default Register;
