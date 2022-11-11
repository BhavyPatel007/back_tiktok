import React, { useState } from "react";
import ReadMoreReact from "read-more-react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useStyles } from "./TabContent_Discover.style";

const ShowMoreLess = ({text}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.DetailRootData}>
      <ReactReadMoreReadLess
        charLimit={200}
        readMoreText={<div className={classes.seeMore}>See More </div>}
        readLessText={<div className={classes.seeMore}>See Less</div>}
      >
        {text}
      </ReactReadMoreReadLess>
    </div>
  );
};
export default ShowMoreLess;
