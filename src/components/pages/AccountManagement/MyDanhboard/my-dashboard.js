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
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TabCart from "./TabCart/tab-cart";
import TabDash from "./TabDash/tab-dash";
import FormComment from "./TabPanel/FormComment/form-comment";
import { useHistory, useLocation } from "react-router-dom";
import { ApiUpdateAvatar } from "../../../../lib/redux/actions/account-management";
import { ApiUsersMe } from "../../../../lib/redux/actions/authentication";
import { CircularProgress } from "@material-ui/core";

function MyDashboard() {
  const location = useLocation();
  const history = useHistory();
  const val = location.search?.slice(5, location.search?.length);
  const [value, setValue] = useState(
    val === "favorite" ? 2 : val === "cart" ? 1 : 0
  );
  const [loadingUploadAvatar, setLoadingUploadAvatar] = useState(false);

  console.log("value: ", value);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const favoriteCourses = useSelector((state) => state.Courses.favoriteCourses);
  const userInfo = useSelector((state) => state.Authentication.userInfo);
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div style={{ padding: "100px 0px 100px 0px " }}>
      <div
        style={{
          paddingTop: 120,
          alignContent: "flex-end",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          background:
            'url("https://ednuv-ng.envytheme.com/page-title1.ba127805b954f8da1e9c.jpg")',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "50vh",
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
          {loadingUploadAvatar ? (
            <div
              style={{
                height: 300,
                width: "35%",
                marginRight: 4,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            <label
              style={{
                width: "35%",
                marginRight: 4,
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              <img
                src={
                  userInfo?.avatarLink
                    ? userInfo?.avatarLink
                    : "https://portal.staralliance.com/imagelibrary/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
                }
                alt=""
                style={{
                  width: "100%",
                  marginRight: 4,
                  borderRadius: 5,
                }}
              />
              <input
                type="file"
                hidden
                onChange={(event) => {
                  const file = event.target.files[0];
                  setLoadingUploadAvatar(true);
                  if (file) {
                    const apiData = new FormData();
                    apiData.append("file", file);

                    // fetch("https://abcstudyonline.herokuapp.com/auth/avatar", {
                    //   method: "PUT",
                    //   headers: {
                    //     Authorization: `Bearer ${accessToken}`,
                    //   },
                    //   body: apiData,
                    // }).then(
                    //   function (res) {
                    //     if (res.ok) {
                    //       alert("Perfect! ");
                    //     } else if (res.status == 401) {
                    //       alert("Oops! ");
                    //     }
                    //   },
                    //   function (e) {
                    //     console.log("Error submitting form!", e);
                    //   }
                    // );
                    dispatch(ApiUpdateAvatar(accessToken, apiData)).then(
                      (response) => {
                        if (response?.status === 200) {
                          dispatch(ApiUsersMe(accessToken)).finally(() => {
                            setLoadingUploadAvatar(false);
                          });
                        }
                      }
                    );
                  }

                  event.target.value = "";
                }}
              />
            </label>
          )}

          <div
            style={{
              marginLeft: 15,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <BlackText style={{ fontSize: 22, fontWeight: 600 }}>
              {userInfo?.firstName}
            </BlackText>
            <BlackText
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "#727695",
                marginTop: 15,
              }}
            >
              {userInfo?.username}
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
                {userInfo?.email}
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
                {userInfo?.phoneNumber}
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
                {userInfo?.address}
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
                  localStorage.removeItem("accessToken");
                  dispatch({ type: "LOGOUT" });
                  history.push("");
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
          <Tab icon={<DashboardIcon />} label="Dashboard" />
          <Tab icon={<ShoppingCartIcon />} label="Carts" />
          <Tab icon={<FavoriteIcon />} label="Favorites" />
          <Tab icon={<EditIcon />} label="Account Details" />
        </Tabs>
      </Paper>
      {/* <TabPanel value={value} index={0} content={"hello dashboard"} courses></TabPanel> */}
      <TabDash value={value} index={0}></TabDash>
      <TabCart value={value} index={1}></TabCart>
      <TabPanel
        value={value}
        index={2}
        favoriteCourses={favoriteCourses}
      ></TabPanel>
      <AccountDetailPanel
        value={value}
        index={3}
      ></AccountDetailPanel>
    </div>
  );
}
export default MyDashboard;
