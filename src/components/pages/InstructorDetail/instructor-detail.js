import React from "react";
import { useHistory } from "react-router-dom";
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
import RelatedCourses from "../CourseDetail/RelatedCourses/related-courses";

function InstructorDetail() {
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
          <div style={{ width: "100%", textAlign: "center" }}>
            <img
              src="/assets/user1.jpg"
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
                    91
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
                    80
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
              Jonkin Jullinor
            </BlackText>
            <RedText
              style={{
                marginTop: 15,
              }}
            >
              Angular Teacher
            </RedText>
            <BlackText
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: "#727695",
                marginTop: 15,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </BlackText>
          </div>
        </div>
        <RelatedCourses style={{ marginTop: 60,fontSize:37 }} caseTitle={'Courses by Jonkin Jullinor'} />
      </div>
    </div>
  );
}

export default InstructorDetail;
