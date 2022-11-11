import { Box, Card, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { useTheme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Devider from "../../../../comman/uiElement/Devider";
import TabContentDiscover from "../../TabContent_Discover/TabContent_Discover";
import { useStyles } from "./profilelist.style";
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

const ProfileList = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);
  const getvalue = localStorage.getItem("fav");
  useEffect(() => {
    if (getvalue) {
      setValue(2);
    } else {
      setValue(0);
    }
  }, [getvalue]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item md={9} xs={12} style={{ paddingTop: 0 }}>
      <Card className={classes.cardStyle}>
      <AppBar
            position="static"
            style={{ borderBottom: "1px solid #8080805e" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Search" {...a11yProps(0)} />
              <Tab className="selected" label="My Hires(4)" {...a11yProps(1)} />
              <Tab label="Saved(81)" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        {/* Best Matches */}
        <TabPanel value={value} index={0}>
          <TabContentDiscover />
        </TabPanel>
        {/* Most Recent Saved Jobs */}
        <TabPanel value={value} index={1}>
          <Devider />
          <TabContentDiscover />
          <Devider />
        </TabPanel>
        {/* Saved Jobs */}
        <TabPanel value={value} index={2}>
          <Devider />
          {/* <p className="cardDescription">
            Browse jobs that match your experience to a client's hiring
            preferences. Ordered by most relevant.
          </p> */}
             <TabContentDiscover />
          <Devider />
        </TabPanel>
      </Card>
    </Grid>
  );
};
export default ProfileList;
