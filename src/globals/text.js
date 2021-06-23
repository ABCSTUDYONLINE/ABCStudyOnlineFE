import injectSheet from "react-jss";
import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  redText: {
    color: "#ff1949",
    fontWeight: 500,
    fontSize: 15,
  },
  blackText: {
    fontSize: 37,
    fontWeight: 700,
    color: "#252525",
    lineHeight: 1.2,
  },
  grayText: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#212529",
  },
  forgotPassword: {
    color: "#ff1949",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.5,
    "&:hover": {
      color: "#0eb582",
    },
    cursor: "pointer",
  },
};

function RedTextCointainer({ classes, ...props }) {
  return <div className={classes.redText} {...props}></div>;
}
function BlackTextCointainer({ classes, ...props }) {
  return <div className={classes.blackText} {...props}></div>;
}
function GrayTextCointainer({ classes, ...props }) {
  return <div className={classes.grayText} {...props}></div>;
}
function ForgotPasswordContainer({ classes, ...props }) {
  return <div className={classes.forgotPassword} {...props}></div>;
}

export const RedText = withStyles(styles)(RedTextCointainer);
export const BlackText = injectSheet(styles)(BlackTextCointainer);
export const GrayText = injectSheet(styles)(GrayTextCointainer);
export const ForgotPassword = injectSheet(styles)(ForgotPasswordContainer);
