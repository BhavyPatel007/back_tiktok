import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import { useNavigate } from "react-router-dom";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    
    "&:hover": {
      backgroundColor: "#3C58A7",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
      "& .MuiListItemIcon-root, & .MuiTypography-colorTextSecondary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Menus = ({closeClick}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value,setValue]=React.useState('Jobs')
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigateUrl = (url,title) => {
    navigate(url);
    setAnchorEl(null);
    setValue(title)
    closeClick()
  };
  
  return (
    <div style={{marginLeft:'1rem'}}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          height: "40px",
          background: "rgb(60, 88, 167)",
          boxShadow:
            "rgb(0 0 0 / 5%) 0px 0px 0px 1px, rgb(209 213 219) 0px 0px 0px 1px inset",
          textTransform: "capitalize",
          width: "100px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          color: "grey",
        }}
      >
        <div style={{color:'grey'}}>{value}</div>
        <ExpandMoreIcon   style={{color:'grey'}}/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          onClick={() => navigateUrl("/dashboard/telent/findwork",'jobs')}
        >
          <ListItemIcon>
            <AssignmentOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary="Jobs"
            secondary="Apply to jobs posted by clients"
          />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => navigateUrl("/dashboard/telent","Talent")}>
          <ListItemIcon>
            <SupervisorAccountOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary="Talent"
            secondary="Hire profession and agencies"
          />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => navigateUrl("/dashboard/telent",'Projects')}>
          <ListItemIcon>
            <WorkOutlineOutlinedIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary="Projects"
            secondary="Buy ready-to-start services"
          />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};
export default Menus;
