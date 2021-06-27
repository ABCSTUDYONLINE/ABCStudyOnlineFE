import React from "react";
import {
  BlackText,
  CardFooterText,
  CardSocialMediaDashboard,
} from "../../../../globals/index";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
function MyDashboard() {
  return (
    <div style={{ padding: "100px 75px 100px 75px" }}>
      <div
        style={{
          marginBottom: 35,
          boxShadow: "0 0 40px 3px rgb(0 0 0 / 4%)",
          borderRadius: 5,
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyDashboard;
