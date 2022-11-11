import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
const Usestyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "&>span": {
      marginBottom: "0.5rem",
      color: "white",
    },
  },
  textRoot:{
   color:"white",
   [theme.breakpoints.down('sm')]:{
    width:80
   }
  },
  MainRoot: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "8rem",
    paddingRight: "8rem",
    background: "#3C58A7",
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]:{
        paddingLeft:'16px'
    }
  },
  FollwusRoot: {
    display: "flex",
    alignItems: "center",
    columnGap: 15,
  },
  socialRoot:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3.5rem",
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        alignItems:'start',
        rowGap:15
    }
  },
  Main2root:{
    display: "flex",
          justifyContent: "space-between",
          width: "100%",
          [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            alignItems:'start',
            rowGap:23
        }
  }
}));
const MyFooter = () => {
  const classes = Usestyle();
  return (
    <div className={classes.MainRoot}>
      <div
        className={classes.Main2root}
      >
        <div className={classes.root}>
          <span>About Us</span>
          <span>Feedback</span>
          <span>Coummunity</span>
        </div>
        <div className={classes.root}>
          <span>Trust,Sefety & Security</span>
          <span>Help & Support</span>
         
        </div>
        <div className={classes.root}>
          <span>Terms of Services</span>
          <span>Privacy Policy</span>
          <span>CA Notice at Collection</span>
          <span>Cookia Settings</span>
        </div>
        <div className={classes.root}>
          <span>Accessbility</span>
          <span>Desktop App</span>
          <span>Cookie Policy</span>
          <span>Enterprie Solution </span>
        </div>
      </div>
      <div
      className={classes.socialRoot}
      >
        <div className={classes.FollwusRoot}>
          <div style={{ color: "white" }} className={classes.textRoot}>Follow Us</div>
          <div style={{ display: "flex", columnGap: 10 }}>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <FacebookIcon style={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <LinkedInIcon style={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <TwitterIcon style={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <YouTubeIcon style={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <InstagramIcon style={{ fontSize: 15 }} />
            </IconButton>
          </div>
        </div>
        <div className={classes.FollwusRoot}>
          <div style={{ color: "white" }} className={classes.textRoot}>Mobile App</div>
          <div style={{ display: "flex", columnGap: 10 }}>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <AndroidIcon style={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <AppleIcon style={{ fontSize: 15 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyFooter;
