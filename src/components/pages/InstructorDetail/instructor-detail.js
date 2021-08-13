import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  BlackText,
  CardButton,
  CardButtonText,
  CardFooterText,
  CardSocialMediaDashboard,
  RedText,
} from "../../../globals";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";

import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";


function InstructorDetail() {
  const history = useHistory();
  const location = useLocation();
  const teacher=location.state.teacher;
  console.log('instructor detail: ',teacher)
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
            Instructor Details
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
        >{`Instructor Details`}</div>
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
          <div style={{ width: "40%", textAlign: "center" }}>
            <img
              src={teacher?.avatarLink ? teacher.avatarLink : "https://portal.staralliance.com/imagelibrary/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"}
              alt=""
              style={{
                marginRight: 4,
                borderRadius: 5,
                width: "100%",
                objectFit: "cover",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{ display: "flex", alignItems: "center", marginTop: 15 }}
              >
                <PeopleAltOutlinedIcon
                  style={{ color: "#cfcfcf", fontSize: 25 }}
                ></PeopleAltOutlinedIcon>
                <div
                  style={{
                    paddingLeft: 10,
                    paddingRight: 20,
                    borderRight: "1px solid #eee ",
                    textAlign:'start'
                  }}
                >
                  <RedText style={{ fontSize: 14, fontWeight: 600 }}>
                    FOLLOWER
                  </RedText>
                  <CardButtonText
                    style={{
                      cursor: "pointer",
                      fontSize: 16,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    2
                  </CardButtonText>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <PeopleAltRoundedIcon
                  style={{ color: "#cfcfcf", fontSize: 25 }}
                ></PeopleAltRoundedIcon>
                <div
                  style={{
                    paddingLeft: 10,
                    paddingRight: 20,
                    borderRight: "1px solid #eee ",
                  }}
                >
                  <RedText style={{ fontSize: 14, fontWeight: 600 }}>
                    FOLLOWING
                  </RedText>
                  <CardButtonText
                    style={{
                      cursor: "pointer",
                      fontSize: 16,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    1
                  </CardButtonText>
                </div>
              </div>
            </div>
            <CardButton style={{ borderRadius: 36, marginTop: 15,fontSize: 18}}>
              <div>Follow</div>
            </CardButton>
            <div
              style={{
                display: "flex",
                color: "#fff",
                marginTop: 15,
                justifyContent:'center'
              }}
            >
              <CardSocialMediaDashboard  >
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
          <div
            style={{
              marginLeft: 15,
            }}
          >
            <BlackText style={{ fontSize: 22, fontWeight: 600 }}>
              {`${teacher?.firstName} ${teacher?.lastName}`}
            </BlackText>
            <RedText
              style={{
                marginTop: 15,
              }}
            >
              {teacher?.role}
            </RedText>
            <BlackText
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "#727695",
                marginTop: 15,
              }}
            >
              {teacher?.shortBio}
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
                {teacher?.email}
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
                {teacher?.phoneNumber}
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
                {teacher?.address}
              </CardFooterText>
            </div>
            
          </div>
        </div>
        {/* <RelatedCourses style={{ marginTop: 60,fontSize:37 }} caseTitle={'Courses by Jonkin Jullinor'} /> */}
      </div>
    </div>
  );
}

export default InstructorDetail;
