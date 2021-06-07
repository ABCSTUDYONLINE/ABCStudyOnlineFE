import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { CardFooterText, CardSocialMedia } from "../../../globals";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#12141b",
        paddingTop: 100,
      }}
    >
      <div
        style={{
          marginRight: 75,
          marginLeft: 75,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              marginBottom: 25,
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Contact Us
          </div>
          <div>
            <div
              style={{
                display: "flex",
                color: "#ccc",
                alignItems: "flex-start",
                maxWidth: "75%",
              }}
            >
              <LocationOnIcon style={{ fontSize: 18 }} />
              <CardFooterText
                style={{
                  cursor: "pointer",
                  marginLeft: 5,
                }}
              >
                227 Nguyen Van Cu, Phuong 4, Quan 5, Ho Chi Minh, Viet Nam
              </CardFooterText>
            </div>
            <div
              style={{
                display: "flex",
                color: "#ccc",
                alignItems: "flex-start",
                maxWidth: "75%",
              }}
            >
              <PhoneInTalkIcon style={{ fontSize: 18 }} />
              <CardFooterText
                style={{
                  cursor: "pointer",

                  marginLeft: 5,
                }}
              >
                +84357004545
              </CardFooterText>
            </div>
            <div
              style={{
                display: "flex",
                color: "#ccc",
                alignItems: "flex-start",
                maxWidth: "75%",
              }}
            >
              <MailIcon style={{ fontSize: 18 }} />
              <CardFooterText
                style={{
                  cursor: "pointer",
                  marginLeft: 5,
                }}
              >
                ABCStudyOnline@hotmail.com
              </CardFooterText>
            </div>
            <div
              style={{
                display: "flex",
                color: "#fff",
                alignItems: "flex-start",
              }}
            >
              <CardSocialMedia>
                <FacebookIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMedia>
              <CardSocialMedia>
                <TwitterIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMedia>
              <CardSocialMedia>
                <InstagramIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMedia>
              <CardSocialMedia>
                <LinkedInIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMedia>
              <CardSocialMedia>
                <PinterestIcon style={{ fontSize: 30, padding: 3 }} />
              </CardSocialMedia>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              marginBottom: 25,
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Support
          </div>
          <div>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginTop: 20,
                marginLeft: 5,
              }}
            >
              Privacy
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              FAQ's
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              Support
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              Terms
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              Condition
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              Policy
            </CardFooterText>
          </div>
        </div>
        <div>
          <div
            style={{
              marginBottom: 25,
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Useful Link
          </div>
          <div>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginTop: 20,
                marginLeft: 5,
              }}
            >
              Web Design
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              UI/UX Design
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              WP Development
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              App
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              Whitepaper
            </CardFooterText>
            <CardFooterText
              style={{
                cursor: "pointer",
                marginLeft: 5,
              }}
            >
              Web Development
            </CardFooterText>
          </div>
        </div>
        <div>
          <div
            style={{
              marginBottom: 25,
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Newsletter
          </div>
          <div style={{ maxWidth: "75%" }}>
            <CardFooterText
              style={{
                marginLeft: 5,
                color: "#ccc",
              }}
            >
              To get the latest news and latest updates from us.
            </CardFooterText>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
