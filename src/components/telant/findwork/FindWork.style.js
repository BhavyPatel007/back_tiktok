import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    padding: "40px 40px",
  },
  "@media(max-width: 768px)": {
    root: {
      padding: "30px 15px",
    },
  },
});

export { useStyles };
