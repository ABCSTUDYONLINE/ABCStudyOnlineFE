import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
  BlackText,
  CardButton,
  CardButtonText,
  ForgotPassword,
  GrayText,
} from "../../../../globals";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          Welcome back
        </BlackText>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
            fontSize: 15,
          }}
        >
          <GrayText>New to Academy?</GrayText>
          <CardButtonText
            style={{
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Sign up
          </CardButtonText>
        </div>
        <form style={{ marginTop: 32 }}>
          <TextField
            label="Your email address"
            variant="outlined"
            margin="dense"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
          />
          <CardButton
            style={{
              width: "100%",
              marginTop: 4,
              borderRadius: 4,
              fontSize: 15,
            }}
          >
            Login
          </CardButton>
          <div>
            <ForgotPassword
              style={{ textAlign: "end", marginTop: 20, fontSize: 15 }}
            >
              Forgot Password?
            </ForgotPassword>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
