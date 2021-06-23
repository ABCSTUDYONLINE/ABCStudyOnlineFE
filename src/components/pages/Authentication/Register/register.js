import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
  BlackText,
  CardButton,
  CardButtonText,
  ForgotPassword,
  GrayText,
} from "../../../../globals";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            label="Create a password"
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
            Sign Up
          </CardButton>
        </form>
      </div>
    </div>
  );
}
export default Register;
