import React, { useState } from "react";
import {
  BlackText,
  CardFooterText,
  CardSocialMediaDashboard,
  CardButton,
} from "../../../../globals/index";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TabPanel from "./TabPanel/tab-panel";
import EditIcon from "@material-ui/icons/Edit";
import AccountDetailPanel from "./TabPanel/AccountDetailPanel/account-detail-panel";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function MyDashboard() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const favoriteCourses = useSelector((state) => state.Courses.favoriteCourses);
  const history = useHistory();
  return (
    <div style={{ padding: "100px 0px 100px 0px " }}>
      <div
        style={{
          paddingTop: 160,
          height: 320,
          alignContent: "flex-end",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          background:
            'url("https://ednuv-ng.envytheme.com/page-title1.ba127805b954f8da1e9c.jpg")',
        }}
      >
        <div
          style={{
            marginRight: 91,
            marginLeft: 91,
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardFooterText
            style={{
              cursor: "pointer",
              marginLeft: 5,
              marginBottom: 0,
              marginTop: 30,
            }}
            onClick={() => {
              history.push(`/`);
              window.scrollTo({ top: 0 });
            }}
          >
            Home
          </CardFooterText>
          <NavigateNextIcon
            style={{
              marginTop: 30,
              color: "#ccc",
              marginRight: 8,
              marginLeft: 8,
            }}
          />
          <div
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "#ccc",
              marginTop: 30,
            }}
          >
            My Dashboard
          </div>
        </div>
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#fff",
            marginRight: 91,
            marginLeft: 91,
          }}
        >{`My Dashboard`}</div>
      </div>
      <div
        style={{
          marginBottom: 35,
          boxShadow: "0 0 40px 3px rgb(0 0 0 / 4%)",
          borderRadius: 5,
          padding: "70px 75px 70px 75px ",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src="/assets/user1.jpg"
            alt=""
            style={{
              width: "33%",
              marginRight: 4,
              borderRadius: 5,
            }}
          />
          <div
            style={{
              marginLeft: 15,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <BlackText style={{ fontSize: 22, fontWeight: 600 }}>
              James Anderson
            </BlackText>
            <BlackText
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "#727695",
                marginTop: 15,
              }}
            >
              James Anderson is a celebrated photographer, author, and teacher
              who brings passion to everything he does.
            </BlackText>
            <div
              style={{
                display: "flex",
                color: "#727695",
                alignItems: "flex-start",
                maxWidth: "75%",
                marginTop: 25,
              }}
            >
              <MailIcon style={{ fontSize: 18 }} />
              <CardFooterText
                style={{
                  cursor: "pointer",
                  marginLeft: 5,
                  color: "#727695",
                }}
              >
                ABCStudyOnline@hotmail.com
              </CardFooterText>
            </div>
            <div
              style={{
                display: "flex",
                color: "#727695",
                alignItems: "flex-start",
                maxWidth: "75%",
                marginTop: 10,
              }}
            >
              <PhoneInTalkIcon style={{ fontSize: 18 }} />
              <CardFooterText
                style={{
                  cursor: "pointer",
                  color: "#727695",
                  marginLeft: 5,
                }}
              >
                +84357004545
              </CardFooterText>
            </div>
            <div
              style={{
                display: "flex",
                color: "#727695",
                alignItems: "flex-start",
                maxWidth: "75%",
                marginTop: 10,
              }}
            >
              <LocationOnIcon style={{ fontSize: 18 }} />
              <CardFooterText
                style={{
                  cursor: "pointer",
                  marginLeft: 5,
                  color: "#727695",
                }}
              >
                227 Nguyen Van Cu, Phuong 4, Quan 5, Ho Chi Minh, Viet Nam
              </CardFooterText>
            </div>
            <div
              style={{
                display: "flex",
                color: "#fff",
                alignItems: "flex-start",
                marginTop: 15,
              }}
            >
              <CardSocialMediaDashboard>
                <FacebookIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMediaDashboard>
              <CardSocialMediaDashboard>
                <TwitterIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMediaDashboard>
              <CardSocialMediaDashboard>
                <InstagramIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMediaDashboard>
              <CardSocialMediaDashboard>
                <LinkedInIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMediaDashboard>
              <CardSocialMediaDashboard>
                <PinterestIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMediaDashboard>
            </div>
            <div style={{ marginTop: 25 }}>
              <CardButton
                style={{ borderRadius: 4 }}
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                }}
              >
                <div>Logout</div>
              </CardButton>
            </div>
          </div>
        </div>
      </div>
      <Paper square style={{ flexGrow: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<DashboardIcon />} label="DASHboard" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<EditIcon />} label="Account Details" />
        </Tabs>
      </Paper>
      {/* <TabPanel value={value} index={0} content={"hello dashboard"} courses></TabPanel> */}
      <TabPanel
        value={value}
        index={1}
        content={"hello favorites"}
        favoriteCourses={favoriteCourses}
      ></TabPanel>
      <AccountDetailPanel
        value={value}
        index={2}
        content={"hello Account details"}
      ></AccountDetailPanel>
    </div>
  );
}
export default MyDashboard;
