import injectSheet from "react-jss";
import React from "react";
import { IconButton, withStyles, Typography } from "@material-ui/core";
import classnames from "classnames";

const styles = {
  cardAction: {
    border: "1px solid",
    background: "#e9e9e9",
    color: "#111",
    display: "block",
    marginBottom: 10,
    "&:hover": {
      background: "#ff1949",
    },
    fontSize: 16,
    borderColor: "white",
  },
  cardButton: {
    background: "#ff1949",
    border: "medium none",
    color: "#fff",
    cursor: "pointer",
    fontSize: 14.5,
    fontWeight: 700,
    borderRadius: 1,
    padding: "13px 25px 12px 25px",
    // lineHeight: 36,
    textTransform: "capitalize",
    "&:hover": {
      background: "#0eb582",
    },
  },
  cardImageBackground: {
    backgroundImage: `url(${"assets/slider2-home1.jpg"})`,
    width: "100%",
    height: "100%",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "5px 5px 0px 0px",
    boxShadow: "-9px 10px 30px -5px rgba(0,0,0,0.06)",
  },
  cardButtonItem: {
    borderRadius: "5px 5px 0px 0px",
    position: "relative",
    cursor: "pointer",
    objectFit: "cover",
  },
  cardButtonText: {
    fontSize: 19,
    fontWeight: 600,
    color: "#252525",
    lineHeight: 1.5,
    marginBottom: 10,
    marginTop: 20,
    "&:hover": {
      color: "#ff1949",
    },
  },
  cardIcon: {
    width: 90,
    height: 90,
    position: "relative",
    border: "2px dashed hsla(0,0%,100%,.8)",
    borderRadius: "50%",
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    display: "flex",
    marginLeft: 180,
    "&:hover": {
      color: "#ff1949",
      backgroundColor: "#fff",
    },
  },
  cardSocialMedia: {
    color: "#fff",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#ff1949",
      backgroundColor: "#fff",
    },
  },
  cardFooterText: {
    fontSize: 15,
    fontWeight: 400,
    color: "#ccc",
    lineHeight: 1.6,
    marginBottom: 10,
    "&:hover": {
      color: "#ff1949",
    },
  },
  cardButtonLogin: {
    background: "#fff",
    border: "medium none",
    color: "#ff1949",
    cursor: "pointer",
    fontSize: 14.5,
    fontWeight: 700,
    borderRadius: 1,
    padding: "13px 25px 12px 25px",
    // lineHeight: 36,
    textTransform: "capitalize",
    "&:hover": {
      background: "#000",
      color: "#fff",
    },
  },
  cardDropCategory: {
    color: "#252525",
    fontSize: 16.5,
    fontWeight: 500,
    cursor: "pointer",
    borderBottom: "2px solid #eee",
    "&:hover": {
      color: "#ff1949",
    },
  },
  cardSocialMediaDashboard: {
    color: "#ff1949",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
    marginRight: 2,
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#ff1949",
    },
  },
};

function CardActionContainer({ classes, className, ...props }) {
  return (
    <IconButton
      className={classnames(className, classes.cardAction)}
      {...props}
    ></IconButton>
  );
}
function CardButtonContainer({ classes, ...props }) {
  return <button className={classes.cardButton} {...props} />;
}
function CardImageBackgroundContainer({ classes, ...props }) {
  return <div className={classes.cardImageBackground} {...props} />;
}
function CardContainer({ classes, ...props }) {
  return <div className={classes.card} {...props}></div>;
}
function CardButtonItemContainer({ classes, ...props }) {
  return <div className={classes.cardButtonItem} {...props}></div>;
}
function CardButtonTextContainer({ classes, ...props }) {
  return (
    <Typography className={classes.cardButtonText} {...props}></Typography>
  );
}
function CardIconContainer({ classes, ...props }) {
  return <div className={classes.cardIcon} {...props}></div>;
}
function CardSocialMediaContainer({ classes, ...props }) {
  return <div className={classes.cardSocialMedia} {...props}></div>;
}
function CardFooterTextContainer({ classes, ...props }) {
  return <div className={classes.cardFooterText} {...props}></div>;
}
function CardButtonLoginContainer({ classes, ...props }) {
  return <button className={classes.cardButtonLogin} {...props} />;
}
function CardDropCategoryContainer({ classes, ...props }) {
  return (
    <Typography className={classes.cardDropCategory} {...props}></Typography>
  );
}
function CardSocialMediaDashboardContainer({ classes, ...props }) {
  return <div className={classes.cardSocialMediaDashboard} {...props}></div>;
}

export const CardAction = withStyles(styles)(CardActionContainer);
export const CardButton = injectSheet(styles)(CardButtonContainer);
export const CardImageBackground = injectSheet(styles)(
  CardImageBackgroundContainer
);
export const Card = injectSheet(styles)(CardContainer);
export const CardButtonItem = injectSheet(styles)(CardButtonItemContainer);
export const CardButtonText = withStyles(styles)(CardButtonTextContainer);
export const CardIcon = injectSheet(styles)(CardIconContainer);
export const CardSocialMedia = injectSheet(styles)(CardSocialMediaContainer);
export const CardFooterText = injectSheet(styles)(CardFooterTextContainer);

export const CardButtonLogin = injectSheet(styles)(CardButtonLoginContainer);
export const CardDropCategory = injectSheet(styles)(CardDropCategoryContainer);

export const CardSocialMediaDashboard = injectSheet(styles)(
  CardSocialMediaDashboardContainer
);
