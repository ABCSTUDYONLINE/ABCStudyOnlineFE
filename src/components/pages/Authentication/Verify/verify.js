import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import {
  BlackText,
  CardButton,
  ForgotPassword,
  GrayText,
} from "../../../../globals";
import {
  ApiConfirmOtpEmail,
  ApiSendEmail,
} from "../../../../lib/redux/actions/authentication";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import isEmpty from "validator/lib/isEmpty";

function Verify() {
  const [code, setCode] = useState("");
  const [openPopup, setopenPopup] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const [validationMsg, setValidationMsg] = useState("");

  const dispatch = useDispatch();
  // const confirmOtpEmailStatus = useSelector(
  //   (state) => state.Authentication.confirmOtpEmailStatus
  // );

  const onSubmitOtpEmaill = () => {
    if (isEmpty(code)) {
      setValidationMsg("Please input code");
      return;
    }
    dispatch(ApiConfirmOtpEmail(location.state.email, Number(code))).then(
      (response) => {
        if (response?.data.data !== null && response?.status === 201) {
          setopenPopup(true);
        } else {
          console.log(response);
          setValidationMsg("Wrong code!");
        }
      }
    );
  };
  const onSubmitResendOtpEmail = () => {
    dispatch(ApiSendEmail(location.state.email));
  };

  const onSubmitBackToLogin = () => {
    history.push("/login");
  };

  return (
    <div style={{ display: "flex" }}>
      <img
        src="/assets/login-bg.jpg"
        alt=""
        style={{
          height: "auto",
          width: "50%",
        }}
      />
      {!openPopup ? (
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
            <GrayText>{`We've sent an email with your code to ${location.state.email}`}</GrayText>
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
            Verify Email Successfully!!!
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
export default Verify;
