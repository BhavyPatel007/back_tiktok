import React from "react";
import { useStyles } from "./Discover.style";
import Grid from "@material-ui/core/Grid";
import Profilelist from "./profilelist";
import Filter from "./filter";
import { ScrollToTop } from "react-simple-scroll-up";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";


const Discover = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Filter />
        <Profilelist />
      </Grid>
      <ScrollToTop
        bgColor="#3C58A7"
        strokeFillColor="white"
        symbol={<ArrowUpwardIcon style={{ color: "white" }} />}
        symbolColor="white"
      />
    </div>
  );
};

export default Discover;
