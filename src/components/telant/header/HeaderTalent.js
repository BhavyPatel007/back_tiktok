import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import React, { useEffect, useState } from "react";
import Avatar from "../../../comman/Avatar";
import DropdownMenu from "../../../comman/DropdownMenu";
import { logo } from "../../../comman/images";
import { useStyles } from "./HeaderTalent.style";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import SearchIcon from "@material-ui/icons/Search";
import { findWork, myJobs, reports } from "./navigation";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from "@material-ui/icons/Close";
import DehazeIcon from "@material-ui/icons/Dehaze";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { NavLink, useNavigate } from "react-router-dom";
import Backdrop from "../../../comman/backDrop/Backdrop";
import SideDrawer from "../../../comman/SideDrawer/SideDrawer";
import Menus from "./Dropdown";
import Menu from '@material-ui/core/Menu';
import { MenuItem} from '@material-ui/core';
import {postTelent} from '../../../redux/telent/JobPost'


const HeaderTalent = () => {
  const classes = useStyles();

  const [subMenuFindWorkOpen, setsubFindWorkMenuOpen] = React.useState(null);
  const [subMenuMyJobsOpen, setsubMyJobsMenuOpen] = React.useState(null);
  const [subMenuReportsOpen, setsubReportsMenuOpen] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate();
  const SavedNotification=()=>
  {
     navigate('/dashboard/telent/findwork')
     localStorage.setItem("fav-telent",true)
  }

const handlelogout=  async () =>{
  localStorage.removeItem('Email');
  navigate("/");
}



const handleclick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};




  return (
    <>
      <Box className={classes.header_style}>
      <img
          src={logo}
          width={130}
          onClick={() => navigate("/dashboard/telent/")}
          style={{marginTop:-7}}
        />
       
        <Box className={classes.headeMenu}>
          <DropdownMenu
            className={classes.dropdownMenu}
            menu="Find Work"
            options={findWork}
            handleClick={(event) => setsubFindWorkMenuOpen(event.currentTarget)}
            subMenuOpen={subMenuFindWorkOpen}
            handleClose={() => setsubFindWorkMenuOpen(null)}
          />
          <DropdownMenu
            className={classes.dropdownMenu}
            menu="My Jobs"
            options={myJobs}
            handleClick={(event) => setsubMyJobsMenuOpen(event.currentTarget)}
            subMenuOpen={subMenuMyJobsOpen}
            handleClose={() => setsubMyJobsMenuOpen(null)}
          />
          <DropdownMenu
            className={classes.dropdownMenu}
            menu="Reports"
            options={reports}
            handleClick={(event) => setsubReportsMenuOpen(event.currentTarget)}
            subMenuOpen={subMenuReportsOpen}
            handleClose={() => setsubReportsMenuOpen(null)}
          />
        </Box>
        <Box className={classes.rightHeader}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search Jobs"
            variant="outlined"
            size="small"
            style={{ background: "white", borderRadius: 10, width: 350 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment:(
                <InputAdornment position="end" >
                   <Menus/>
                </InputAdornment>
              )
            }}
          />
          {/* <Box className={classes.searchArea}>
            <div className="searchBox">
              <SearchIcon />
              <input type="text" placeholder="Search" />
              <DropdownMenu
                menu="My Jobs"
                // options=""
              />
            </div>
            <h2 className="que">?</h2>
          </Box> */}
          <Box className={classes.socialIcons}>
            <IconButton>
            <Badge color="secondary" variant="dot">
              <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton onClick={SavedNotification}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <AccountCircleIcon onClick={handleclick} />
              <Menu
                                  className={classes.menu}
                                  id="simple-menu"
                                  anchorEl={anchorEl}
                                  keepMounted
                                  open={Boolean(anchorEl)}
                                  onClose={handleClose}
                                  elevation={0}
                                >
                                  <MenuItem onClick={() => navigate('/dashboard/profile')}>
                                    Profile
                                  </MenuItem>
                                  <MenuItem onClick={handlelogout}>Log Out</MenuItem>
                                </Menu>
            </IconButton>
            <IconButton onClick={handlelogout}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box className={classes.mobileMenu}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          <Button onClick={openDrawerHandler} style={{ color: "white" }}>
            <DehazeIcon />
          </Button>
          <div className={classes.logoWarap}>
            <img
              src={logo}
              width={150}
              height={37}
              onClick={() => navigate("/dashboard/telent/")}
              alt="text"
            />
            <IconButton
            onClick={openDrawerHandler}
              style={{ color: "white" }}
            >
             <SearchOutlinedIcon/>
            </IconButton>
            
          </div>
        </div>

        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
        <SideDrawer
          show={drawerIsOpen}
          // onClick={closeDrawerHandler}
        >
          <Box className={classes.sideDrawer_style}>
            <header style={{paddingBottom:'0.8rem'}}>
              <Button onClick={closeDrawerHandler}>
                <CloseIcon />
              </Button>
              <img src={logo} width={140}/>
              {/* <Avatar className="logo" image={logo} width={140} height="auto"/> */}
            </header>

            <div style={{
               marginLeft: "0.7REM",
               marginRight: "0.7REM",
               marginTop: "1rem",
               marginBottom: "1REM",
            }}>
            <TextField
            id="input-with-icon-textfield"
            placeholder="Search Jobs"
            variant="outlined"
            size="small"
            style={{ background: "white", borderRadius: 10, width: '100%' }}
            className={classes.mobileSearch}
            InputProps={{
             
              endAdornment:(
                <InputAdornment position="end" >
                   <Menus />
                </InputAdornment>
              )
            }}
          />
            </div>

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>Find Work</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {findWork.map((data) => (
                  <Button
                    onClick={() => {
                      navigate(data.path);
                      closeDrawerHandler();
                    }}
                    className={classes.navLink_accordion}
                  >
                    {data.subMenu}
                  </Button>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>My Jobs</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {myJobs.map((data) => (
                  <NavLink to="" className={classes.navLink_accordion}>
                    {data.subMenu}
                  </NavLink>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>Reports</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {reports.map((data) => (
                  <NavLink to="" className={classes.navLink_accordion}>
                    {data.subMenu}
                  </NavLink>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
          <div style={{
             height: "57vh",
             display: "flex",
             alignItems: "flex-end",
             
          }}>
             <IconButton style={{color:'white'}}
              onClick={handlelogout}>
              <ExitToAppIcon style={{fontSize:30}}/>&nbsp;
              <span style={{fontSize:16}}>Log Out</span>
            </IconButton>
          </div>
        </SideDrawer>
      </Box>
    </>
  );
};

export default HeaderTalent;
