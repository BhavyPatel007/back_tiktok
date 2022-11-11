import React from "react";
import { useStyles } from "./jobprofile.style";
import Grid from "@material-ui/core/Grid";
import Card from "../../../../comman/uiElement/Card";
import Devider from "../../../../comman/uiElement/Devider";
import { Box, Button } from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import LogoCircle from "../../../../comman/uiElement/LogoCircle";
import { circleLogo } from "../../../../comman/images";
import Avatar from "../../../../comman/Avatar";
import { NavLink } from "react-router-dom";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const JobProfile = () => {
  const classes = useStyles();

  const TextWithEditBtn = (props) => {
    return (
      <div className={classes.editSec}>
        <h4 className="availabilityBadgeTitle">{props.title}</h4>
        {props.edit == "true" && (
          <LogoCircle>
            <EditRoundedIcon />
          </LogoCircle>
        )}
      </div>
    );
  };
  return (
    <Grid className={classes.root} item md={3} xs={12}>
      <Card className={classes.cardOne}>
        <Box className={classes.topSec}>
          <Avatar image={circleLogo} className={classes.circleLogo} />
          <h2 className="profileTitle">N__ __S</h2>
          <h5>Looking for a Make-a-thon Lead (Scrum Master)</h5>
        </Box>
        <Devider />
        <Box className={classes.secondSec}>
          <div className="first">
            <h4 className="profileCompleteness:">Profile Completeness:</h4>
          </div>
          <Devider />
          <div className="second">
            <p className="mb-15">Ways to stand out to clients right now...</p>
            <div className="card">
              <p>Add your past work i clients know you're a pra (+30%).</p>
              <Button>Add work</Button>
            </div>
          </div>
        </Box>
        <Devider />
        <Box className={classes.availableConnects}>
          <h4 className="availableTitle">60 Available Connects</h4>
        </Box>
        <Devider />
        <Box className={classes.availabilityBadge}>
          <TextWithEditBtn title="Availability Badge" edit="true" />
          <div className={classes.availableRound}>
            <div className="round">
              <FlashOnIcon />
              <h5>Available now</h5>
            </div>
            <h5>off</h5>
          </div>
          <TextWithEditBtn title="Hours per week" edit="true" />
          <h5 className={classes.normalText}>As Needed - Open to Offers</h5>
          <TextWithEditBtn title="Profile Visibility" edit="true" />
          <h5 className={classes.normalText}>Upwork Users Only</h5>
        </Box>
        <Devider />
        <Box className={classes.MyCategories}>
          <TextWithEditBtn title="My Categories" edit="true" />
          <h5 className={classes.blueText}>Management Consulting & Analysis</h5>
          <h5 className={classes.blueText}>Products Managment</h5>
        </Box>
      </Card>
      <Card className={classes.cardTow}>
        <Box className={classes.proposals}>
          <h3>Proposals</h3>
          <h6 className={classes.blueText}>My Proposals</h6>
          <p>Looking for work? Browse jobs and get started on a proposal.</p>
        </Box>
      </Card>
    </Grid>
  );
};

export default JobProfile;
