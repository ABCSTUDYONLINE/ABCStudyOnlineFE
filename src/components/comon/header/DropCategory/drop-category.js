import {
  Typography,
  Popper,
  Fade,
  Paper,
  List,
  ListItem,
} from "@material-ui/core";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { CardDropCategory } from "../../../../globals/index";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function Dropbox({ open, anchorEl }) {
  return (
    <Popper
      open={true}
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
                  text: "Lap trinh",
                  subs: [
                    "Lap trinh web",
                    "Lap trinh mobile",
                    "Lap trinh game",
                    "Lap trinh nhung",
                  ],
                },
                {
                  text: "Thiet ke",
                  subs: ["Thiet ke giao dien", "Thiet ke do hoa"],
                },
                {
                  text: "Ngoai ngu",
                  subs: ["Tieng anh", "Tieng tay ban nha"],
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
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement={"right-start"}
      transition
      keepMounted
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <List>
              {(items || []).map((sub) => (
                <ListItem
                  onClick={() => {
                    alert(sub);
                  }}
                  key={sub}
                >
                  <CardDropCategory
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography>{sub}</Typography>
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
          marginRight: 20,
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
