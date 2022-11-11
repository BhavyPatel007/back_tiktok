import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      background: "#3C58A7",
      color: "white",
    },
  },
}));

const MyPagination = () => {
  const classes = useStyles();
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      {Mobile ? (
        <Pagination count={10} size="small" />
      ) : (
        <Pagination count={10} />
      )}
    </div>
  );
};
export default MyPagination;
