import {
  Typography,
  Popper,
  Fade,
  Paper,
  List,
  ListItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { CardDropCategory } from "../../../../globals/index";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Dropbox({ open, anchorEl }) {
  const categories = useSelector((state) => state.Courses.categories);
  const webs = categories.filter(
    (category) => category.levelCategory === "web"
  );
  const mobiles = categories.filter(
    (category) => category.levelCategory === "mobile"
  );
useEffect(() => {
  console.log("mounted");
  
  return () => {
  }
}, [ ])

  return (
    <Popper
      open={open}
      style={{ zIndex: 2300 }}
      anchorEl={anchorEl}
      placement={"bottom-start"}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <List>
              {[
                {
                  text: "web",
                  subs: webs,
                },
                {
                  text: "mobile",
                  subs: mobiles,
                },
              ].map((dropData, index) => (
                <DropBoxItem subItems={dropData.subs} key={index}>
                  <CardDropCategory
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>{dropData.text}</Typography>
                    <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                  </CardDropCategory>
                </DropBoxItem>
              ))}
            </List>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

function DropBoxItem({ subItems, children }) {
  const [subMenuAnchorEl, setsubMenuAnchorEl] = useState(null);
  return (
    <ListItem
      onMouseEnter={(e) => {
        setsubMenuAnchorEl(e.currentTarget);
      }}
      onMouseLeave={() => {
        setsubMenuAnchorEl(null);
      }}
    >
      {children}
      <SubDropbox
        items={subItems}
        open={!!subMenuAnchorEl}
        anchorEl={subMenuAnchorEl}
      ></SubDropbox>
    </ListItem>
  );
}
function SubDropbox({ items, open, anchorEl }) {
  let history = useHistory();
  return (
    <Popper
      open={open}
      style={{ zIndex: 2200 }}
      anchorEl={anchorEl}
      placement={"right-start"}
      transition
      keepMounted
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper style={{ zIndex: 9999 }}>
            <List>
              {(items || []).map((sub) => (
                <ListItem
                  onClick={() => {
                    history.push(`/search/category/${sub.categoryName}`,{title:""});
                    window.scrollTo({ top: 0 });
                  }}
                  key={sub.id}
                >
                  <CardDropCategory
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>{sub.categoryName}</Typography>
                  </CardDropCategory>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

function DropCategory() {
  const [anchorEl, setanchorEl] = useState(null);
  return (
    <div
      onMouseEnter={(e) => {
        setanchorEl(e.currentTarget);
      }}
      onMouseLeave={() => {
        setanchorEl(null);
      }}
    >
      <CardDropCategory
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "0",
          paddingRight: 20,
        }}
      >
        <Typography>Category</Typography>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
      </CardDropCategory>
      <Dropbox open={!!anchorEl} anchorEl={anchorEl}></Dropbox>
    </div>
  );
}

export default DropCategory;
