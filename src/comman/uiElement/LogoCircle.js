import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  LogoCircle: {
    borderRadius: "50%",
    boxShadow: "0px 0px 3px 0px",
    backgroundColor: "#fff",
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  },
});

const LogoCircle = (props) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.LogoCircle} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default LogoCircle;
