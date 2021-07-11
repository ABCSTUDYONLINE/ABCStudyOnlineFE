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
    dispatch(ApiConfirmOtpEmail(location.state.email, Number(code))).then(
      (response) => {
        if (response?.status === 201) {
          setopenPopup(true);

          //ong dung state nay de render 1 cai popup gi do la ,pop up cu the la cai nao vay, t biet alert
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
          <BlackText>LOGO Team</BlackText>
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
                marginTop: 4,
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
