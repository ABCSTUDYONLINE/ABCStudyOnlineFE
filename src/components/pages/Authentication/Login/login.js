import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import {
  BlackText,
  CardButton,
  CardButtonText,
  ForgotPassword,
  GrayText,
} from "../../../../globals";
import {
  ApiLogin,
  ApiUsersMe,
} from "../../../../lib/redux/actions/authentication";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const accessToken = useSelector((state) => state.Authentication.accessToken);

  const validateAll = () => {
    const msg = {};
    if (isEmpty(username)) {
      msg.username = "Please input your username";
    }
    if (isEmpty(password)) {
      msg.password = "Please input your Password";
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmitLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
    dispatch(ApiLogin(username, password)).then((response) => {
      if (response?.status === 201) {
        console.log("login thanh cong voi response: ", response);
        console.log(
          "login thanh cong voi accessToken: ",
          response.data.access_token
        );
        dispatch(ApiUsersMe(response.data.access_token));
        history.push("/");
      } else {
        console.log("login that bai voi response: ", response);
        const msg = {};
        msg.username = "Username is incorrect!";
        msg.password = "password is incorrect!";
        setValidationMsg(msg);
      }
    });
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
              marginLeft: 5,
            }}
            onClick={()=>{
              history.push('register');
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
          <CardButton
            style={{
              width: "100%",
              marginTop: 4,
              borderRadius: 4,
              fontSize: 15,
            }}
            type="button"
            onClick={onSubmitLogin}
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
        <div>
          <div style={{}}>Or</div>
          <CardButton
            style={{ borderRadius: 4, marginTop: 40, marginBottom: 20,width:"100%",borderColor:"#3b5998",boxShadow:"0 5px 28.5px 1.5px rgb(59 89 152 / 20%)" }}
          >
            <div>Connect With Google</div>
          </CardButton>
        </div>
      </div>
    </div>
  );
}
export default Login;
