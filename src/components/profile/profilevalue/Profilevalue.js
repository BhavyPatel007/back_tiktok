import { Grid,Box } from '@material-ui/core'
import React from 'react';
import Card from '../../../comman/uiElement/Card';
import { useStyles } from './Profilevalue.style';
import LogoCircle from '../../../comman/uiElement/LogoCircle';
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import AddIcon from '@material-ui/icons/Add';


const Profilevalue = () => {
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

  const TextWithPlusBtn = (props) => {
    return (
      <div className={classes.editSec}>
        <h4 className="availabilityBadgeTitle">{props.title}</h4>
        {props.editplus === "true" && (
          <LogoCircle>
            <AddIcon />
          </LogoCircle>
        )}
      </div>
    );
  };


  return (
  <Grid item md={3} xs={12}>
     <Card className={classes.cardOne}>
     <Box className={classes.availabilityBadge}>
          <TextWithPlusBtn title="Video Introduction" editplus="true" />
          <TextWithEditBtn title="Hours per week" edit="true" />
          <h5 className={classes.normalText}>As Needed - Open to Offers</h5>
          <TextWithEditBtn title="Languages" edit="true" editplus="true" />
          <h5 className={classes.normalText}>English: Fluent</h5>
          <h5 className={classes.normalText}>Verifications</h5>
          <TextWithPlusBtn title="Military veteran" editplus="true" />
          <TextWithPlusBtn title="Education" editplus="true" />

        </Box>

      </Card>
  </Grid>
  )
}
export default Profilevalue