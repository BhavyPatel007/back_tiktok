import { Grid } from "@material-ui/core";
import React from "react";
import Profiledescription from "./profiledescription/Profiledescription";
import Profilename from "./Profilename/Profilename";
import Profilevalue from "./profilevalue/Profilevalue";
import HeaderTalent from "../telant/header/HeaderTalent";
import MyFooter from "../../comman/Fotter/Fotter";
import { useStyles } from "./Profile.style";
import Profilesecond from "./Profilesecond/Profilesecond";

const Profile = () => {
  const classes = useStyles();

  return (
    <div>
      <HeaderTalent />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Profilename />
          <Profiledescription />
          {/* <Profilesecond/> */}
          <Profilevalue />
        </Grid>
      </div>
      <MyFooter />
    </div>
  );
};
export default Profile;
