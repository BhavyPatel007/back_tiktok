import Grid from "@material-ui/core/Grid";
import React from "react";
import Detail from "./detail";
import { useStyles } from "./JobDescription.style";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileDetail from "./MobileDetail";

const JobDescription = (id) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
        {
          mobile?
          <MobileDetail/>
          :
          <Detail id={id}/>
        }
      
      </Grid>
    </div>
  );
};

export default JobDescription;
