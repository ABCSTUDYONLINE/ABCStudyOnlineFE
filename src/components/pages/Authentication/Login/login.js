import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import GoogleLogin from 'react-google-login';
import {
  BlackText,
  CardButton,
  CardButtonText,
  ForgotPassword,
  GrayText,
} from "../../../../globals";
import {
  ApiLogin,
  ApiGoogleLogin,
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
      if (response?.status === 201 && response?.data.data) {
        console.log("login thanh cong voi response: ", response);
        console.log(
          "login thanh cong voi accessToken: ",
          response.data.access_token
        );
        localStorage.setItem('accessToken', response.data.data.access_token)
        localStorage.setItem('refreshToken', response.data.data.refresh_token)
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

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    dispatch(ApiGoogleLogin({
      email: response.profileObj.email,
      firstName: response.profileObj.familyName,
      lastName: response.profileObj.givenName,
      avatarLink: response.profileObj.imageUrl
    })).then((response) => {
      if (response?.status === 201 && response?.data.data) {
        console.log("login thanh cong voi response: ", response);
        console.log(
          "login thanh cong voi accessToken: ",
          response.data.access_token
        );
        localStorage.setItem('accessToken', response.data.data.access_token)
        history.push("/");
      } else {
        console.log("login that bai voi response: ", response);
      }
    })
  }

  const responseGoogleFailure = (response) => {
    console.log(response)
  }

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
            onClick={() => {
              history.push("register");
            }}
          >
            Sign up
          </CardButtonText>
        </div>

        <form style={{ marginTop: 32 }}>
          <TextField
            label="User name"
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
              onClick={() => {
                history.push("/forget-password");
              }}
            >
              Forgot Password?
            </ForgotPassword>
          </div>
        </form>
        <div>
          <div style={{}}>Or</div>
          {/* <CardButton
            
          > */}
          <div 
            style={{
              // borderRadius: 4,
              marginTop: 40,
              marginBottom: 20,
              // width: 'auto',
              // borderColor: "#3b5998",
              // boxShadow: "0 5px 28.5px 1.5px rgb(59 89 152 / 20%)",
            }}
          >
            <GoogleLogin
              clientId="310536133366-vefh39st26o6t4hl63veqjjtg6n80pcu.apps.googleusercontent.com"
              buttonText="Login With Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogleFailure}
              cookiePolicy={'single_host_origin'}
            />
          {/* </CardButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
