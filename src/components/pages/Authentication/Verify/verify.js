import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
  BlackText,
  CardButton,
  CardButtonText,
  ForgotPassword,
  GrayText,
} from "../../../../globals";

function Verify() {
  const [email, setEmail] = useState("");

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
          <GrayText>We've sent an email with your code to your email</GrayText>
        </div>
        <form style={{ marginTop: 32 }}>
          <TextField
            label="Enter the code"
            variant="outlined"
            margin="dense"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <CardButton
            style={{
              width: "100%",
              marginTop: 4,
              borderRadius: 4,
              fontSize: 15,
            }}
          >
            Continue
          </CardButton>
          <div
            style={{ display: "flex", marginTop: 20, justifyContent: "center" }}
          >
            <div style={{ fontSize: 15 }}>Didn't receive an email? </div>
            <ForgotPassword style={{ fontSize: 15, marginLeft: 5 }}>
              Resend
            </ForgotPassword>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Verify;
