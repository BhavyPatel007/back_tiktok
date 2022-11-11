import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  LinearProgress,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import LogoCircle from "../../../comman/uiElement/LogoCircle";
import { useStyles } from "./profiledetail.style";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PropTypes from "prop-types";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import image1 from '../../../assets/images/icon/circleLogo.png'
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
      <div className={classes.MainRoot}>
        <Badge
          badgeContent=" "
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          className={classes.badgeRoot}
        >
          <Avatar
            className={classes.avatarRoot}
            src="https://v4.mui.com/static/images/avatar/1.jpg"
          ></Avatar>
        </Badge>
        <div className={classes.contentRoot}>
          <span className={classes.textHead}>Drushti M</span>
          <span className={classes.TextData2}>India</span>
          <div className={classes.Progress}>
            92%
            <LinearProgress variant="determinate" value={92} />
            Job Success
          </div>
        </div>
      </div>
      <div className={classes.countingData}>
        <div>
          <h3>$80k+</h3>
          <span>Total Earning</span>
        </div>
        <div>
          <h3>8</h3>
          <span>Total Jobs</span>
        </div>
        <div>
          <h3>2,714</h3>
          <span>Total Hours</span>
        </div>
      </div>
      <div className={classes.dataroot}>
        <div className={classes.ProfileTitle}>
          <div>
            <h2>Sr.Web Consultent</h2>
            <LogoCircle>
              <AllInclusiveIcon />
            </LogoCircle>
          </div>

          <h3>$25.00/hr</h3>
        </div>
        <div>
          <ul>
            <li>
              describe the responsibilities of the position, the level of the
              job, or both.
            </li>
            <li>
              For example, job titles that include the terms “executive,”
              “manager,” “director,” “chief,”
            </li>
            <li>“supervisor,” etc. are typically used for management jobs</li>
            <li>
              Be as detailed as possible, create an appealing job title, add
              your budget etc
            </li>
          </ul>
          <div className="skill">
            <span>Full Skills</span>
            <p>none</p>
          </div>
        </div>
      </div>
      <div className={classes.WorkHistory}>
        <div className="logoWrap">
          <h3>Work History</h3>
          <LogoCircle>
            <MoreHorizIcon />
          </LogoCircle>
        </div>
        <AppBar position="static" style={{ marginLeft: -7, marginTop: 10 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Completed Job(20)" {...a11yProps(0)} />
          </Tabs>
        </AppBar>
      </div>
      <div className={classes.workList}>
        <div className={classes.work}>
          <h3>Java Testing Engineer</h3>
          <div className={classes.reviewData}>
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div>5.00 Oct 24,2017 - Apr 7,2022</div>
          </div>
          <p style={{ marginTop: 12 }}>
            Be as detailed as possible, create an appealing job title, add your
            budget etc
          </p>
          <div className={classes.HoursRoot}>
            <h4>50,55.22</h4>
            <h4>525.00/hr</h4>
            <h4>2367/hours</h4>
          </div>
        </div>
        <div className={classes.work}>
          <h3 style={{ paddingTop: "1rem" }}>Java Testing Engineer</h3>
          <div className={classes.reviewData}>
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div>5.00 Oct 24,2017 - Apr 7,2022</div>
          </div>
          <p style={{ marginTop: 12 }}>
            Be as detailed as possible, create an appealing job title, add your
            budget etc
          </p>
          <div className={classes.HoursRoot}>
            <h4>50,55.22</h4>
            <h4>525.00/hr</h4>
            <h4>2367/hours</h4>
          </div>
        </div>
      </div>
      <div className={classes.SkillRoot}>
        <h3>Skills</h3>
        <div className={classes.chipWrap}>
          <Chip label="HTML" />
          <Chip label="CSS" />
          <Chip label="Python" />
          <Chip label="Java" />
          <Chip label="JavaScript" />
          <Chip label="Swift" />
          <Chip label="C++" />
          <Chip label="C#" />
          <Chip label="Golang" />
          <Chip label="PHP" />
          <Chip label="TypeScript" />
          <Chip label="Visual Basic .NET" />
          <Chip label="Ruby" />
          <Chip label="SQL" />
        </div>
      </div>
      <div className={classes.EducationRoot}>
        <div>
          <h4>Hours Per Week</h4>
          <span>Less than 30 hrs week</span>
        </div>
        <div>
          <h4>Languges</h4>
          <span style={{ display: "flex", alignItems: "center" }}>
            English Fluint
            <CheckCircleIcon
              style={{
                fontSize: 17,
                color: "#3C58A7",
                marginLeft: "0.2rem",
              }}
            />{" "}
          </span>
        </div>
        <div>
          <h4>Education</h4>
          <p>Gujarat University</p>
          <p>BSC(CA & IT)</p>
          <p>2012-2015</p>
        </div>
      </div>
      {/* <div className={classes.MainRootProfile}>
          <div className={classes.ProfileRoot1}>
          <h3>Number of Contribution</h3>
          <div className={classes.tableroot}>
           
          <div className={classes.lefttable}>
          <div className={classes.DetailRootleft}>
        <div>
          <img src={image1}/><br/>
          
        </div>
        <div className={classes.RatedRoot}>
          <div className={classes.Progress}>
            Micro Experience
           
          </div>
          <div className={classes.TopRated}>
            5
          </div>
        </div>
      </div>
      <div className={classes.DetailRootleft}>
        <div>
          <img src={image1}/><br/>
          
        </div>
        <div className={classes.RatedRoot}>
          <div className={classes.Progress}>
            Micro Experience
           
          </div>
          <div className={classes.TopRated}>
            5
          </div>
        </div>
      </div>
      <div className={classes.DetailRootleft}>
        <div>
          <img src={image1}/><br/>
          
        </div>
        <div className={classes.RatedRoot}>
          <div className={classes.Progress}>
            Micro Experience
           
          </div>
          <div className={classes.TopRated}>
            5
          </div>
        </div>
      </div>
      <div className={classes.DetailRootleft}>
        <div>
          <img src={image1}/><br/>
          
        </div>
        <div className={classes.RatedRoot}>
          <div className={classes.Progress}>
            Micro Experience
           
          </div>
          <div className={classes.TopRated}>
            5
          </div>
        </div>
      </div>
      <div className={classes.DetailRootleft}>
        <div>
          <img src={image1}/><br/>
          
        </div>
        <div className={classes.RatedRoot}>
          <div className={classes.Progress}>
            Micro Experience
           
          </div>
          <div className={classes.TopRated}>
            5
          </div>
        </div>
      </div>
      <div className={classes.DetailRootleft}>
        <div>
          <img src={image1}/><br/>
          
        </div>
        <div className={classes.RatedRoot}>
          <div className={classes.Progress}>
            Micro Experience
          </div>
          <div className={classes.TopRated}>
            5
          </div>
        </div>
      </div>
      <div className={classes.DetailRootleft}>
        <div>
          <img src={image1}/><br/>
          
        </div>
        <div className={classes.RatedRoot}>
          <div className={classes.Progress}>
            Micro Experience
          </div>
          <div className={classes.TopRated}>
            5
          </div>
        </div>
      </div>
         <div className={classes.DetailRootleft}>
        <div>
          <img src={image1}/><br/>
          
        </div>
        <div className={classes.RatedRoot}>
          <div className={classes.Progress}>
            Micro Experience
          </div>
          <div className={classes.TopRated}>
            5
          </div>
        </div>
      </div>
          </div>
          <div className={classes.righttable}>
          <span>
              hiii
            </span>
          </div>
          </div>
          </div>
          <div className={classes.DetailRoot}>
          <div className={classes.EMPhistory}>
          <h3 style={{ paddingBttom: "2rem" }}>Employment history</h3>
          <div className={classes.EmployHistoryList}>
            <div>
              <h4 style={{ paddingBttom: "0.5rem" }}>
                Member of Technical Staff | Infinite Computer Solution
              </h4>
              <p>September 2011 - November 2015</p>
            </div>
            <li>Have Lead Team And Softwere Engineer</li>
          </div>
          <div className={classes.EmployHistoryList}>
            <div>
              <h4 style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
                Member of Technical Staff | Infinite Computer Solution
              </h4>
              <p>September 2011 - November 2015</p>
            </div>
            <li>Have Lead Team And Softwere Engineer</li>
          </div>
        </div>
        
          </div>
        </div> */}
      <div className={classes.MobileStyleCard} >
        <div className={classes.EMPhistory}>
          <h3 style={{ paddingBttom: "2rem" }}>Employment history</h3>
          <div className={classes.EmployHistoryList}>
            <div>
              <h4 style={{ paddingBttom: "0.5rem" }}>
                Member of Technical Staff | Infinite Computer Solution
              </h4>
              <p>September 2011 - November 2015</p>
            </div>
            <li>Have Lead Team And Softwere Engineer</li>
          </div>
          <div className={classes.EmployHistoryList}>
            <div>
              <h4 style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
                Member of Technical Staff | Infinite Computer Solution
              </h4>
              <p>September 2011 - November 2015</p>
            </div>
            <li>Have Lead Team And Softwere Engineer</li>
          </div>
        </div>
      </div>
      <Button className={classes.SaveButton}>
        <FavoriteBorderIcon/>&nbsp;Save
      </Button>
    </div>
  );
};
export default MobileDetail;
