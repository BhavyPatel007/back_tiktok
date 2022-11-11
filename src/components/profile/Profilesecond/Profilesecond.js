import React from 'react'
import Card from '../../../comman/uiElement/Card';
import { Grid,Box } from '@material-ui/core';
import { useStyles } from './Profilesecond.style';
import LogoCircle from '../../../comman/uiElement/LogoCircle';
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import Devider from '../../../comman/uiElement/Devider';
import AddIcon from '@material-ui/icons/Add';
import image1 from '../../../assets/images/bag.jfif'

const Profilesecond = () => {
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
   <h1>hii</h1>
  )
}
export default Profilesecond;