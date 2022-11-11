import React from "react";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";
const useStyles=makeStyles(()=>({
  MenuItemClass:{
   "&:hover":{
    backgroundColor:'rgb(60 88 167)',
    color:'white'
   }
  }
}))
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
    // "&:focus": {
    //   backgroundColor: theme.palette.primary.main,
    //   "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
}))(MenuItem);

const DropdownMenu = (props) => {
  const classes=useStyles()
  // const [subMenuOpen, setsubMenuOpen] = React.useState(null);

  // const handleClick = (event) => {
  //   setsubMenuOpen(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setsubMenuOpen(null);
  // };

  const navigate = useNavigate();

  return (
    <div className={props.className}>
      <Button
        // aria-controls="customized-menu"
        // aria-haspopup="true"
        // variant="contained"
        // color="primary"
        onClick={props.handleClick}
        style={{fontSize:17}}
      >
        {props.menu}
        {props.options && (
          <KeyboardArrowDownIcon style={{ fontSize: "18px", marginLeft: 2 }} />
        )}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={props.subMenuOpen}
        keepMounted
        open={Boolean(props.subMenuOpen)}
        onClose={props.handleClose}
      >
        {props.options &&
          props.options.map((data) => (
            <StyledMenuItem
              onClick={() => {
                navigate(data.path);
                props.handleClose();
                localStorage.removeItem('fav');
                localStorage.removeItem('fav-telent')

              }}
              className={classes.MenuItemClass}
            >
              <ListItemText primary={data.subMenu} />
            </StyledMenuItem>
          ))}
        {/* <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem> */}
      </StyledMenu>
    </div>
  );
};

export default DropdownMenu;
