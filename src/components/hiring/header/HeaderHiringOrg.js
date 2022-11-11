import {
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import Avatar from "../../../comman/Avatar";
import { logo } from "../../../comman/images";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useStyles } from "./HeaderHiringOrg.style";
import DropdownMenu from "../../../comman/DropdownMenu";
import { jobs, Organization, projects, talent } from "./navigation";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink, useNavigate } from "react-router-dom";
import SideDrawer from "../../../comman/SideDrawer/SideDrawer";
import Backdrop from "../../../comman/backDrop/Backdrop";
import Menus from "./Dopdown";
import Menu from "@material-ui/core/Menu";
import { MenuItem } from "@material-ui/core";

const HeaderHiringOrg = () => {
  const classes = useStyles();

  const [subMenuJobsOpen, setsubJobsMenuOpen] = React.useState(null);
  const [subMenuTalentOpen, setsubTalentMenuOpen] = React.useState(null);
  const [subMenuProjectsOpen, setsubProjectsMenuOpen] = React.useState(null);
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

  console.log("subMenuJobsOpen__", subMenuJobsOpen);
  const navigate = useNavigate();
  const SavedNotification = () => {
    navigate("/dashboard/hire/discover");
    localStorage.setItem("fav", true);
  };

  const handlelogout = async () => {
    localStorage.removeItem("Email");
    navigate("/");
  };

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
          onClick={() => navigate("/dashboard/hire/")}
          style={{ marginTop: -7 }}
        />
        <Box className={classes.headeMenu}>
          <DropdownMenu
            className={classes.dropdownMenu}
            menu="Jobs"
            options={jobs}
            handleClick={(event) => setsubJobsMenuOpen(event.currentTarget)}
            subMenuOpen={subMenuJobsOpen}
            handleClose={() => setsubJobsMenuOpen(null)}
          />
          <DropdownMenu
            className={classes.dropdownMenu}
            menu="Talent"
            options={talent}
            handleClick={(event) => setsubTalentMenuOpen(event.currentTarget)}
            subMenuOpen={subMenuTalentOpen}
            handleClose={() => setsubTalentMenuOpen(null)}
          />
          <DropdownMenu
            className={classes.dropdownMenu}
            menu="Projects"
            options={projects}
            handleClick={(event) => setsubProjectsMenuOpen(event.currentTarget)}
            subMenuOpen={subMenuProjectsOpen}
            handleClose={() => setsubProjectsMenuOpen(null)}
          />
          <DropdownMenu
            className={classes.dropdownMenu}
            menu="Reports"
            options={Organization}
            handleClick={(event) => setsubProjectsMenuOpen(event.currentTarget)}
            subMenuOpen={subMenuProjectsOpen}
            handleClose={() => setsubProjectsMenuOpen(null)}
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
              endAdornment: (
                <InputAdornment position="end">
                  <Menus />
                </InputAdornment>
              ),
            }}
          />
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
                <MenuItem onClick={() => navigate("/dashboard/profile")}>
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
          }}
        >
          <Button onClick={openDrawerHandler} style={{ color: "white" }}>
            <DehazeIcon />
          </Button>
          <img
            src={logo}
            width={150}
            height={37}
            onClick={() => navigate("/dashboard/telent/")}
            alt="text"
          />
          <IconButton onClick={openDrawerHandler} style={{ color: "white" }}>
            <SearchOutlinedIcon />
          </IconButton>
        </div>

        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
        <SideDrawer
          show={drawerIsOpen}
          // onClick={closeDrawerHandler}
        >
          <Box className={classes.sideDrawer_style}>
            <header>
              <Button onClick={closeDrawerHandler}>
                <CloseIcon />
              </Button>
              <img src={logo} width={140} />
              {/* <Avatar className="logo" image={logo} /> */}
            </header>

            <div
              style={{
                marginLeft: "0.7REM",
                marginRight: "0.7REM",
                marginTop: "1rem",
                marginBottom: "1REM",
              }}
            >
              <TextField
                id="input-with-icon-textfield"
                placeholder="Search"
                variant="outlined"
                size="small"
                style={{ background: "white", borderRadius: 10, width: "100%" }}
                className={classes.mobileSearch}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" style={{ padding: 0 }}>
                      <Menus />
                    </InputAdornment>
                  ),
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
                <Typography className={classes.heading}>Jobs</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {jobs.map((data) => (
                  <NavLink to="" className={classes.navLink_accordion}>
                    {data.subMenu}
                  </NavLink>
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
                <Typography className={classes.heading}>Talent</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {talent.map((data) => (
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
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>Projects</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {projects.map((data) => (
                  <NavLink to="" className={classes.navLink_accordion}>
                    {data.subMenu}
                  </NavLink>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
          <div
            style={{
              height: "57vh",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <IconButton style={{ color: "white" }} onClick={handlelogout}>
              <ExitToAppIcon style={{ fontSize: 30 }} />
              &nbsp;
              <span style={{ fontSize: 16 }}>Log Out</span>
            </IconButton>
          </div>
        </SideDrawer>
      </Box>
    </>
  );
};

export default HeaderHiringOrg;
