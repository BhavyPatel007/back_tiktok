import React from 'react';
import { Grid,Box } from '@material-ui/core';
import { useStyles } from './profiledesc.style';
import Card from '../../../comman/uiElement/Card';
import LogoCircle from '../../../comman/uiElement/LogoCircle';
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import Devider from '../../../comman/uiElement/Devider';
import AddIcon from '@material-ui/icons/Add';
import image1 from '../../../assets/images/bag.jfif'


 const Profiledescription = () => {
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

  const TextWithLinkBtn = (props) => {
    return (
      <div className={classes.editSec}>
        <h4 className="availabilityBadgeTitle">{props.title}</h4>
        {props.edit === "true" && (
          <LogoCircle>
            <InsertLinkIcon />
          </LogoCircle>
        )}
      </div>
    );
  };

  return (
    <Grid item md={6} xs={12}>
         <Card className={classes.cardOne}>
        <Box className={classes.topSec}>
        <div className={classes.DetailRoot}>
        <div>
        <TextWithEditBtn title="Product/Program Manager" edit="true" />
        </div>
        <div className={classes.RatedRoot}>
        <TextWithEditBtn title="$160.00/hr" edit="true" />
        <TextWithLinkBtn  edit="true" />
        </div>
      </div>
      <div className={classes.middle}>
      <h5 className={classes.normalText}>Senior Program Manager with over 16 years experience. implementing digital
       transformation strategy at C levels, managed regional complex project with 
       budgets of up to $60 - suppotting a variety of business needs including regulatory-
      <span style={{color: '#3C58A7'}}>more</span> </h5>
      <TextWithEditBtn edit="true" />
      </div>
      <div className={classes.middle}>
      <h5 className={classes.normalText}>Senior Program Manager with over 16 years experience. implementing digital
       transformation strategy at C levels, managed regional complex project with 
       budgets of up to $60 - suppotting a variety of business needs including regulatory-
      <span style={{color: '#3C58A7'}}>more</span> </h5>
      
      </div>
        </Box>
        <Devider/>
      <div className={classes.middlemain}>
      <span className={classes.middle1}>Work History</span>
      <span className={classes.middle2}>No items</span>
      </div>
      <Devider/>
      <div className={classes.lastmain}>
      <TextWithPlusBtn title="Portfolio" editplus="true" />
    
      </div>
      <div className={classes.mainimage}>
      <img src={image1} className={classes.image} />
      {/* <span>Showcase your work to win more projects</span> */}
      <p>Showcase your work to win more projects</p>
      <p className={classes.lastpara}>Add items to impress clients</p>
      </div>
      <Devider/>
      <div className={classes.lastmain}>
      <TextWithEditBtn title="Skills" edit="true" />
      </div>
      <div className={classes.roundedicon}>
      <div className={classes.availableRound1}>
            <div className="round">
              <span>Project Management</span>
            </div>
          </div>
          <div className={classes.availableRound1}>
            <div className="round">
              <span>Program Management</span>
            </div>
          </div>
          <div className={classes.availableRound1}>
            <div className="round">
              <span>Product Management</span>
            </div>
          </div>
          <div className={classes.availableRound1}>
            <div className="round">
              <span>Software Development</span>
            </div>
          </div>
      </div>
      
      </Card>
    
   
         <Card className={classes.cardOne}>
         <Box className={classes.availabilityBadge}>
          <TextWithPlusBtn title="Testimonials" editplus="true" />
          <h5 className={classes.normalText}>Endorsements from past clients</h5>
        </Box>
      <div className={classes.mainimage}>
      <img src={image1} className={classes.image} />
      {/* <span>Showcase your work to win more projects</span> */}
      <p>Showcase your skills to with non-Upwork client Testimonials</p>
      <p className={classes.lastpara}>Request a testimonials</p>
      </div>
      </Card>
      <Card className={classes.cardOne}>
         <Box className={classes.availabilityBadge}>
          <TextWithPlusBtn title="Certificates" editplus="true" />
        </Box>
      <div className={classes.mainimage}>
      <img src={image1} className={classes.image} />
      <p>Listing your certificates can help prove your specific knowledge or abilities.(+10%)</p>
      <p>You can add them manually or import them from Credly.</p>
      <div className={classes.RatedRooted}>
      <p className={classes.lastpara}>Add manually</p>
      <p className={classes.lastpara}>Import from Credly</p>
      </div>
      </div>
      </Card>
      <Card className={classes.cardOne}>
         <Box className={classes.availabilityBadge}>
          <TextWithPlusBtn title="Employment history " editplus="true" />
        </Box>
      <div className={classes.mainimage}>
      <img src={image1} className={classes.image} />
      <p>Listing your certificates can help prove your specific knowledge or abilities.(+10%)</p>
    
      <div className={classes.RatedRooted}>
      <p className={classes.lastpara}>Add manually</p>
      </div>
      </div>
      </Card>
    </Grid>
  )
}
export default Profiledescription