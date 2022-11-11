import React, { useEffect } from "react";
import { useStyles } from "./FindWork.style";
import Grid from "@material-ui/core/Grid";
import JobProfile from "./jobProfile";
import JobsDescription from "./jobsdescription";

const FindWork = (id) => {
  const classes = useStyles();
  // const geData = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("cache-control", "no-cache");
  //   myHeaders.append("content-type", "application/json");
  //   myHeaders.append("postman-token", "f15506df-16a7-8145-1dbc-994d6acf5fd0");
  //   myHeaders.append('Access-Control-Allow-Origin', '*');
  //   myHeaders.append('Access-Control-Allow-Credentials', 'true');

  //   var raw = JSON.stringify({
  //     Action: "getJobPostForTalent",
  //     JobpostID: `${id}`,
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //     Credential:true,
      
  //   };

  //   fetch(
  //     "https://10acb4dfc9.execute-api.ap-southeast-1.amazonaws.com/dev/getdata",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };
  // useEffect(() => {
  //   geData();
  // }, []);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <JobsDescription />
        <JobProfile />
      </Grid>
    </div>
  );
};

export default FindWork;
