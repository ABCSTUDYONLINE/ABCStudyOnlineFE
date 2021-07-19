import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  BlackText,
  CardButton,
  ForgotPassword,
  GrayText,
} from "../../../../globals";
import isEmpty from "validator/lib/isEmpty";
import { useDispatch } from "react-redux";
import {
  ApiForgetPasswordConfirmOtpEmail,
  ApiForgetPasswordSendEmail,
  ApiForgetPasswordUpdateNewPassword,
} from "../../../../lib/redux/actions/authentication";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ForgetPassword() {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const history = useHistory();
  const [validationMsg, setValidationMsg] = useState("");
  const dispatch = useDispatch();
  const [openPopupInputCode, setopenPopupInputCode] = useState(false);
  const [openPopupInputNewPassWord, setopenPopupInputNewPassword] =
    useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const onSubmitSendEmaill = () => {
    console.log(username);
    if (isEmpty(username)) {
      setValidationMsg("Please input username");
      return;
    }

    dispatch(ApiForgetPasswordSendEmail(username)).then((response) => {
      if (response?.data.data !== null && response?.status === 201) {
        setopenPopupInputCode(true);
        setValidationMsg("");
      } else {
        console.log(response);
        setValidationMsg(response?.data.message);
      }
    });
  };

  const onSubmitOtpEmaill = () => {
    if (isEmpty(code)) {
      setValidationMsg("Please input code");
      return;
    }
    dispatch(ApiForgetPasswordConfirmOtpEmail(username, Number(code))).then(
      (response) => {
        if (response?.data.data !== null && response?.status === 201) {
          setopenPopupInputNewPassword(true);
          setValidationMsg("");
        } else {
          console.log(response);
          setValidationMsg("Wrong code!");
          //   setopenPopupInputCode(false);
        }
      }
    );
  };
  const onSubmitResendOtpEmail = () => {
    dispatch(ApiForgetPasswordSendEmail(username));
  };
  const onSubmitNewPassword = () => {
    if (isEmpty(newPassword)) {
      setValidationMsg("Please input your new password");
      return;
    }
    dispatch(ApiForgetPasswordUpdateNewPassword(username, newPassword)).then(
      (response) => {
        if (response?.data.data !== null && response?.status === 200) {
          setOpenPopup(true);
          setValidationMsg("");
        } else {
          console.log(response);
          setValidationMsg(response?.data.message);
        }
      }
    );
  };
  const onSubmitBackToLogin = () => {
    history.push("/login");
  };

  return (
    <div style={{ display: "flex", }}>
      <img
        src="/assets/login-bg.jpg"
        alt=""
        style={{
          height: "auto",
          width: "50%",
        }}
      />
      {!openPopupInputCode ? (
        <div style={{ textAlign: "center", width: "50%", padding: 60 }}>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              history.push("/");
              window.scrollTo({ top: 0 });
            }}
          >
            <img
              src="/assets/logo-team.png"
              alt=""
              style={{
                width: 100,
                height: 100,
                marginRight: 4,
                objectFit: "cover",
              }}
            />
            <BlackText style={{ fontSize: 32 }}>ABCStudy</BlackText>
          </div>
          <BlackText style={{ fontSize: 35, fontWeight: 700, marginTop: 30 }}>
            Forgot Your Password?
          </BlackText>

          <form style={{ marginTop: 32 }}>
            <TextField
              label="Enter username"
              variant="outlined"
              margin="dense"
              fullWidth
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              error={!!validationMsg}
              helperText={validationMsg || ""}
            />

            <CardButton
              style={{
                width: "100%",
                marginTop: 16,
                borderRadius: 4,
                fontSize: 15,
              }}
              type="button"
              onClick={onSubmitSendEmaill}
            >
              Continue
            </CardButton>
          </form>
        </div>
      ) : !openPopupInputNewPassWord ? (
        <div style={{ textAlign: "center", width: "50%", padding: 60 }}>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              history.push("/");
              window.scrollTo({ top: 0 });
            }}
          >
            <img
              src="/assets/logo-team.png"
              alt=""
              style={{
                width: 100,
                height: 100,
                marginRight: 4,
                objectFit: "cover",
              }}
            />
            <BlackText style={{ fontSize: 32 }}>ABCStudy</BlackText>
          </div>
          <BlackText style={{ fontSize: 35, fontWeight: 700, marginTop: 30 }}>
            Verify Your Identify
          </BlackText>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 8,
              fontSize: 15,
            }}
          >
            <GrayText>{`We've sent an email with code to your email`}</GrayText>
          </div>
          <form style={{ marginTop: 32 }}>
            <TextField
              label="Enter the code"
              variant="outlined"
              margin="dense"
              fullWidth
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
              type="number"
              error={!!validationMsg}
              helperText={validationMsg || ""}
            />

            <CardButton
              style={{
                width: "100%",
                marginTop: 16,
                borderRadius: 4,
                fontSize: 15,
              }}
              type="button"
              onClick={onSubmitOtpEmaill}
            >
              Continue
            </CardButton>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 15 }}>Didn't receive an email? </div>
              <ForgotPassword
                style={{ fontSize: 15, marginLeft: 5 }}
                onClick={onSubmitResendOtpEmail}
              >
                Resend
              </ForgotPassword>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "center",
              }}
            ></div>
          </form>
        </div>
      ) : !openPopup ? (
        <div style={{ textAlign: "center", width: "50%", padding: 60 }}>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              history.push("/");
              window.scrollTo({ top: 0 });
            }}
          >
            <img
              src="/assets/logo-team.png"
              alt=""
              style={{
                width: 100,
                height: 100,
                marginRight: 4,
                objectFit: "cover",
              }}
            />
            <BlackText style={{ fontSize: 32 }}>ABCStudy</BlackText>
          </div>
          <BlackText style={{ fontSize: 35, fontWeight: 700, marginTop: 30 }}>
            Update new Password
          </BlackText>

          <form style={{ marginTop: 32 }}>
            <TextField
              label="Enter new password"
              variant="outlined"
              margin="dense"
              fullWidth
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              error={!!validationMsg}
              helperText={validationMsg || ""}
            />

            <CardButton
              style={{
                width: "100%",
                marginTop: 16,
                borderRadius: 4,
                fontSize: 15,
              }}
              type="button"
              onClick={onSubmitNewPassword}
            >
              Continue
            </CardButton>
          </form>
        </div>
      ) : (
        <div style={{ textAlign: "center", width: "50%", padding: 60 }}>
          <CheckCircleIcon
            style={{
              fontSize: 250,
              fontWeight: 700,
              marginTop: 60,
              color: "#ff1949",
            }}
          />
          <BlackText
            style={{
              fontSize: 35,
              fontWeight: 700,
              marginTop: 30,
              marginBottom: 60,
            }}
          >
            Update Password Successfully!!!
          </BlackText>
          <CardButton
            style={{
              width: "100%",
              marginTop: 4,
              borderRadius: 4,
              fontSize: 15,
            }}
            type="button"
            onClick={onSubmitBackToLogin}
          >
            Back To Login
          </CardButton>
        </div>
      )}
    </div>
  );
}

export default ForgetPassword;
