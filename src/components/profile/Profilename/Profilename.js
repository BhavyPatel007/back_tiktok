import React from 'react';
import { Grid ,Box} from '@material-ui/core';
import Card from '../../../comman/uiElement/Card';
import Avatar from '../../../comman/Avatar';
import { circleLogo } from '../../../comman/images';
import { useStyles } from './Profilename.style';
import FlashOnIcon from "@material-ui/icons/FlashOn";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import LogoCircle from "../../../comman/uiElement/LogoCircle";


const Profilename = () => {
  const classes = useStyles();


  const TextWithEditBtn = (props) => {
    return (
      <div className={classes.editSec}>
        <h4 className="availabilityBadgeTitle">{props.title}</h4>
        {props.edit === "true" && (
          <LogoCircle>
            <EditRoundedIcon />
          </LogoCircle>
        )}
      </div>
    );
  };

  

  return (
    <>
    {/* <Grid item sm={3} xs={12}>
    <Card className={classes.cardOne}>
        <Box className={classes.topSec}>
          <Avatar image={circleLogo} className={classes.circleLogo} />
          <div className={classes.contentRoot}>
            <span>
              Nilesh S.
            </span>
            <span>Singapore,Singapore - 9:23 pm local time</span>
          </div>
          <div className={classes.availableRound}>
            <div className="round">
              <FlashOnIcon />
              <h5>Available now</h5>
            </div>
            <h5>off</h5>
            <TextWithEditBtn edit="true"  />
          </div>
          <div className={classes.availableRound1}>
            <div className="round">
              <span>See Public View</span>
            </div>
          </div>
          <div className={classes.availableRound2}>
            <div className="round">
              <span>Profile Settings</span>
            </div>
          </div>
        </Box>
      </Card>
    </Grid> */}
     <Grid item md={3} xs={12}>
     <Card className={classes.cardOne}>
     <Box className={classes.availabilityBadge}>
     <Avatar image={circleLogo} className={classes.circleLogo} />
          <div className={classes.contentRoot}>
            <span>
              Nilesh S.
            </span>
            <span>Singapore,Singapore - 9:23 pm local time</span>
          </div>
          <div className={classes.availableRound}>
            <div className="round">
              <FlashOnIcon />
              <h5>Available now</h5>
            </div>
            <h5>off</h5>
            <TextWithEditBtn edit="true"  />
          </div>
          <div className={classes.availableRound1}>
            <div className="round">
              <span>See Public View</span>
            </div>
          </div>
          <div className={classes.availableRound2}>
            <div className="round">
              <span>Profile Settings</span>
            </div>
          </div>
        </Box>

      </Card>
  </Grid>
    </>
  )
}
export default Profilename;