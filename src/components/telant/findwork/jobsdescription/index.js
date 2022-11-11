/* eslint-disable react/jsx-pascal-case */
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React, { useEffect } from "react";
import Card from "../../../../comman/uiElement/Card";
import LogoCircle from "../../../../comman/uiElement/LogoCircle";
import { useStyles } from "./jobdesc.style";
import { useNavigate } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import PropTypes from "prop-types";
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-dom";
import MyPagination from "../../../../comman/Pagination";
import TabContent_FindWork from "../TabContent_FindWork/TabContent_FindWork";
const searchClient = instantMeiliSearch(
  "http://18.142.119.109:7700/",
  "ea10f4f06ef9ce49441fdff44b6181af8630fe355b99ff68f3a5d01e43a80dda"
);

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

const Jobsdescription = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  const [searchShow, setsearchShow] = React.useState(false);
  const getvalue = localStorage.getItem("fav-telent");
  useEffect(() => {
    if (getvalue) {
      setValue(2);
    } else {
      setValue(0);
    }
  }, [getvalue]);
  const onChnageSearch = (e) => {
    if (e.target.value == "") {
      setsearchShow(false);
    } else {
      setsearchShow(true);
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Hit = ({ hit }) => {
    console.log('hitjobpost',hit);
    console.log('iddd',hit.Jobpost_ID);
    if (hit.Entity === "JOBPOST" ) {
      return (
        <>
          <div className="hit-name" style={{ display: "none" }}>
            <Highlight attribute="Fname" hit={hit} />
          </div>
          <TabContent_FindWork
             seeMoreClick={() =>
              { navigate(`/dashboard/telent/findwork/job-description/${hit.Jobpost_ID}`)
            console.log('clickjob',hit.Jobpost_ID);
            }
            }
            type={hit.Project_Type ? hit.Project_Type : "none"}
            data={hit.Skill_Set ? hit.Skill_Set : ["none"]}
            discription={hit.Description ?  <Highlight attribute="Description" hit={hit} /> : "none"}
            Proposal={
              hit?.Proposal_Questions?.length > 0
                ? hit?.Proposal_Questions?.length
                : 0
            }
            paymentVerified={
              hit?.Payment_Method_Verified
                ? hit?.Payment_Method_Verified
                : false
            }
            location={hit?.Location ? <Highlight attribute="Location" hit={hit} /> : "none"}
            
            title={hit.Jobpost_Title ?  <Highlight attribute="Description" hit={hit} /> : "none"}

          />
        </>
      );
    } 
  };

  return (
    <InstantSearch indexName="gurucool_dev" searchClient={searchClient}>
      <Grid item md={9} xs={12}>
        <Box className={classes.topSearchBar}>
          <SearchBox onChange={onChnageSearch} />
          {/* <input type="text" placeholder="Search for job" />
        <div className="searchBtn">
          <SearchIcon />
        </div> */}
        </Box>
        <Box className={classes.recentSearches}>
          <h5 className="label">Recent Searches:</h5>
          <h5 className="valueBlue">Aakar software and services.aakar</h5>
        </Box>
        <Card className={classes.cardStyle}>
          <header>
            <h1>Jobs you might like</h1>
            <LogoCircle>
              <MoreHorizIcon />
            </LogoCircle>
          </header>

          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Best Matches" {...a11yProps(0)} />
              <Tab
                className="selected"
                label="Most Recent Saved Jobs"
                {...a11yProps(1)}
              />
              <Tab label="Saved Jobs" {...a11yProps(2)} />
            </Tabs>
          </AppBar>

          {/* Best Matches */}
          <TabPanel value={value} index={0}>
            <Hits hitComponent={Hit} />
          </TabPanel>
          {/* Most Recent Saved Jobs */}
          <TabPanel value={value} index={1}>
            <Hits hitComponent={Hit} />
          </TabPanel>
          {/* Saved Jobs */}
          <TabPanel value={value} index={2}>
            <Hits hitComponent={Hit} />
          </TabPanel>
        </Card>
        <div className={classes.paginationRoot}>
          <MyPagination />
        </div>
      </Grid>
    </InstantSearch>
  );
};

export default Jobsdescription;
