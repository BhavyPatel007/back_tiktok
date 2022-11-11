import React from "react";
import { Box, IconButton } from "@material-ui/core";
import { useStyles } from "./TabContent_Discover.style";
import SearchIcon from "@material-ui/icons/Search";
import Devider from "../../../comman/uiElement/Devider";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import PersonDes from "./ProfileDes";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TuneIcon from "@material-ui/icons/Tune";
import LogoCircle from "../../../comman/uiElement/LogoCircle";
import { useNavigate } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import MobileFilter from "../discover/filter/mobileFilter";
import MyPagination from "../../../comman/Pagination";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
const searchClient = instantMeiliSearch(
  "http://18.142.119.109:7700/",
  "ea10f4f06ef9ce49441fdff44b6181af8630fe355b99ff68f3a5d01e43a80dda"
  
);
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);
const handleDelete = () => {
  console.info("You clicked the delete icon.");
};

const handleClick = () => {
  console.info("You clicked the Chip.");
};

const TabContent_Discover = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const [searchShow, setsearchShow] = React.useState(false);
  const navigate = useNavigate();
  const Hit = ({ hit }) => {
    if (hit.Entity ===  "USER" ) {
      console.log('hitttt',hit);
      console.log(hit.Description)
      
    return (
      <>
        <div className="hit-name" style={{ display: "none" }}>
          <Highlight attribute="Description" hit={hit} />
        </div>
        <PersonDes
          seeMoreClick={() =>
         
        {    navigate(`/dashboard/hire/discover/profile-description/${hit.User_ID}`)
            console.log('onclick',hit.User_ID)}
          }
          
          text={hit.Description ? <Highlight attribute="Description" hit={hit} /> : "null"}
          hour={hit.Rates ? <Highlight attribute="Rates" hit={hit} /> : "0.0$/hour"}
          name={
            hit.Fname && hit.Lname ? hit.Fname + " " + hit.Lname : "name"
          }
          status={hit.Status}
          Jobpost_Title={hit.Jobpost_Title ? <Highlight attribute="Jobpost_Title" hit={hit} color="red"/>: "Developer"}
          Tags={hit.Recommended_for ? hit.Recommended_for : []}
          skillSet={hit.Skill_Set ? hit.Skill_Set : []}
          location={hit.Location ? hit.Location : "null"}
          imgurl={hit.imageURL? hit.imageURL : "https://gurucoolimages.s3.ap-southeast-1.amazonaws.com/talentimages/nilesh.jpeg"}
        />
      </>
    );
        }
  };
  const onChnageSearch = (e) => {
    if (e.target.value == "") {
      setsearchShow(false);
    }
    else
    {
      setsearchShow(true);
    }
    
  };
  return (
    <InstantSearch indexName="gurucool_dev" searchClient={searchClient}>
      <div className={`${classes.TabContent} ${classes.className}`}>
        <div className={classes.rootperson}>
          <Box className={classes.topSearchBar}>
            <SearchBox onChange={onChnageSearch} />
            {/* <input type="text" placeholder="Search" /> */}
            {/* <div className="searchBtn">
            <SearchIcon />
          </div> */}
            {mobile ? (
              <div style={{ marginLeft: "10px" }}>
                <Badge
                  badgeContent={1}
                  color="primary"
                  className={classes.badgeRoot2}
                >
                  <LogoCircle>
                    <TuneIcon onClick={() => setOpen(true)} />
                  </LogoCircle>
                </Badge>
              </div>
            ) : null}
          </Box>

          <Box className={classes.recentSearches}>
            {/* <h5 className="valueBlue">Advanced Search</h5> */}
          </Box>
          {mobile ? null : (
            <Box className={classes.chipRootMain}>
              <Chip
                className={classes.ChipRoot}
                label="Category: web,mobile & software dev"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <h5 className="label">Clear filters</h5>
            </Box>
          )}
        </div>
        <Hits hitComponent={Hit} />

        <div className={classes.paginationRoot}>
          <MyPagination />
        </div>
        <Drawer
          open={open}
          anchor={"right"}
          onClose={() => setOpen(false)}
          className={classes.DrawerRoot}
        >
          <div className={classes.drawerHeadrer}>
            <span>Filters</span>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon style={{ color: "white" }} />
            </IconButton>
          </div>
          <MobileFilter />
        </Drawer>
      </div>
    </InstantSearch>
  );
};
export default TabContent_Discover;
