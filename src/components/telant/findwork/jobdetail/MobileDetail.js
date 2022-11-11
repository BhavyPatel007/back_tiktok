import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  IconButton,
  LinearProgress,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import PinDropIcon from "@material-ui/icons/PinDrop";
// import LogoCircle from "../../../comman/uiElement/LogoCircle";
import { useStyles } from "./JobDescription.style";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PropTypes from "prop-types";
import FlagIcon from "@material-ui/icons/Flag";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { ContactSupport } from "@material-ui/icons";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MobileDetail = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [myIndex, setMyIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ width: "100%" }}>
      <div className={classes.dataroot}>
        <div className={classes.ProfileTitle}>
          <h2 style={{ fontSize: 16 }}>Digital Project Manager</h2>
        </div>
        <div className="div-title">
          <p className="title" style={{ fontSize: 14 }}>
            Digital Project Management
          </p>
          <p className="time-line">Posted 1 hour Ago</p>
        </div>
        <div className="location">
          <PinDropIcon />
          World Wide
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{color: "#808080b0", fontSize: "13px" }}>Posted 1 hour Ago</p>
          <ContactSupportIcon style={{ color: "green", fontSize: 20 }} />
        </div>
        <div className="tag-line" style={{ fontSize: 14, lineHeight: "20px",marginTop:0 }}>
          I am looking for project manager, who has experience in blockchain,I
          am looking for project manager, who has experience in blockchain,I am
          looking for project manager, who has experience in blockchain,I am
          looking for project manager, who has experience in blockchain,I am
          looking for project manager, who has experience in blockchain,I am
          looking for project manager, who has experience in blockchain,I am
          looking for project manager, who has experience in blockchain,I am
          looking for project manager, who has experience in blockchain,I am
          looking for project manager, who has experience in blockchain,I am
          looking for project manager, who has experience in blockchain
        </div>
      </div>
      <div className={classes.countingData}>
        <div className="hedingDiv">
          <div>
            <h5>More than 30hrs/week</h5>
            <span>Fixed Price</span>
          </div>
          <div>
            <h5>Intermediate</h5>
            <span>Experience Level</span>
          </div>
        </div>
        <div className="hedingDiv">
          <div>
            <h5>6+ Month</h5>
            <span>Duration</span>
          </div>
          <div>
            <h5>$12.00 - $35.00</h5>
            <span>hourly</span>
          </div>
        </div>
      </div>
      <div className={classes.PastHire}>
        <h5>Project Type</h5>
        <p>One-Time Project</p>
      </div>
      <div className={classes.SkillRoot}>
        <h4>Skills and Expertise</h4>
        <div className="skill-data">
          <Chip
            label="Social Media"
            style={{ background: "#3c58a7", color: "white" }}
          />
          <Chip
            label="Social Media"
            style={{ background: "#3c58a7", color: "white" }}
          />
          <Chip
            label="Social Media"
            style={{ background: "#3c58a7", color: "white" }}
          />
          <Chip
            label="Social Media"
            style={{ background: "#3c58a7", color: "white" }}
          />

          <Chip
            label="Sales And Marketing"
            style={{ background: "#3c58a7", color: "white" }}
          />
          <Chip
            label="Project Management"
            style={{ background: "#3c58a7", color: "white" }}
          />

          <Chip
            label="Project Sgeduling"
            style={{ background: "#3c58a7", color: "white" }}
          />
        </div>
      </div>
      <div className={classes.EducationRoot}>
        <h4>Activity On this Job</h4>
        <div>
          <span>Proposals:</span>
          <b>
            <ContactSupportIcon style={{ color: "green", fontSize: 20 }} />
            50+
          </b>
        </div>
        <div>
          <span>Last viewd client:</span>
          <b>
            <ContactSupportIcon style={{ color: "green", fontSize: 20 }} />8
            hours ago
          </b>
        </div>
        <div>
          <span>Interviewing:</span>
          <b>0</b>
        </div>
        <div>
          <span>Invites Sent:</span>
          <b>0</b>
        </div>
        <div>
          <span>Unanswered Invites:</span>
          <b>0</b>
        </div>
      </div>
      <div className={classes.About}>
        <h4>About The Client</h4>
        <div>
          <span style={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon style={{ color: "green", fontSize: 18 }} /> &nbsp;
            <b>Payment method verified</b>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <StarIcon style={{ color: "green", fontSize: 18 }} />
            <StarIcon style={{ color: "green", fontSize: 18 }} />
            <StarIcon style={{ color: "green", fontSize: 18 }} />
            <StarIcon style={{ color: "green", fontSize: 18 }} />
            <StarIcon style={{ color: "green", fontSize: 18 }} />
          </div>
          <span>4.93 of 85 reviews</span>
        </div>
        <div>
          <h3>United State</h3>
          <span>Gleyn Ellyn 11:55pm</span>
        </div>
        <div>
          <h3>114 jobs posted</h3>
          <span>67% hire rate, 6 open jobs</span>
        </div>
        <div>
          <h3>20.00/hr avg hourly rate paid</h3>
          <span>143 hours</span>
        </div>
        <div>
          <h3>Intermediate</h3>
          <span>I am Loofing for mix experience</span>
        </div>
        <div>
          <span>Member since May 26,2014</span>
        </div>
      </div>
      <div className={classes.EMPhistory}>
        <h4 style={{ paddingBttom: "2rem" }}>Client Recent history(50)</h4>

        <div className={classes.EmployHistoryList}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Job in Progress
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  rowGap: 0,
                  width: "100%",
                }}
              >
                <div className={classes.Detailhistory}>
                  <div className="title-work">
                    <p>Web Analytics Expert</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 14,
                      }}
                    >
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      &nbsp;good excellent
                    </div>
                  </div>
                  <div className="time-work">
                    <p>Mar 2022 - Aug 2022</p>
                    <p>80 hrs @ $20.00/hr</p>
                    <p>Billed:$1,594.00</p>
                  </div>
                </div>
                <div className={classes.root2}>
                  <span>To Freelancer:&nbsp;</span>
                  <span>
                    <b style={{ color: "#3c58a7" }}>Sharma.S</b> No given
                    feedback
                  </span>
                </div>
                <div className={classes.Detailhistory}>
                  <div style={{ width: "100%" }}>
                    <span className="text-site">
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      <StarIcon style={{ color: "green", fontSize: 14 }} />
                      &nbsp; Amazing experience I am glad we meet and very
                      excited to work together, always to be happy to
                      communicate and work together. Amazing experience I am
                      glad we meet and very excited to work together, always to
                      be happy to communicate and work together.
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: 14 }}>
                  To Freeancer <b style={{ color: "#3c58a7" }}>Sharma.S</b>
                  &nbsp;
                  <StarIcon style={{ color: "green", fontSize: 14 }} />
                  <StarIcon style={{ color: "green", fontSize: 14 }} />
                  <StarIcon style={{ color: "green", fontSize: 14 }} />
                  <StarIcon style={{ color: "green", fontSize: 14 }} />
                  <StarIcon style={{ color: "green", fontSize: 14 }} />
                  &nbsp; Amazing experience I am glad we meet and very excited
                  to work together, always to be happy to communicate and work
                  together. Amazing experience I am glad we meet and very
                  excited to work together, always to be happy to communicate
                  and work together.
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className={classes.ViewMore}>
        <b style={{ color: "#3c58a7" }}>View More</b>&nbsp;(44)
      </div>
      <div className={classes.EMPhistory}>
        <h4 style={{ paddingBttom: "1rem" }}>Similar Jobs On</h4>
        <div className={classes.Root3} style={{paddingBottom:'28px'}}>
          <span>
            <b style={{ color: "#3c58a7" }}>Project Manager</b> Posotion Project
            Manager
          </span>
          <span>
            <b style={{ color: "#3c58a7" }}>Looking for a hardhat Expert</b>{" "}
            Fixed Prce
          </span>
          <span>
            <b style={{ color: "#3c58a7" }}>Russian to English translator</b>{" "}
            Fixed Prce
          </span>
          <span>
            <b style={{ color: "#3c58a7" }}>System Administrator</b> Fixed Prce
          </span>
        </div>
      </div>
      <div className={classes.flagRoot}>
        <p className="flag">
          <FlagIcon />
          Flag as inappropriate
        </p>
      </div>
      <div className={classes.buttonWrap}>
        <Button className={classes.SaveButton}>Submit Proposals</Button>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default MobileDetail;
