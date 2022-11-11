import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
 
  topSec: {
    padding: "30px 30px",
    // textAlign: "center",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px", paddingRight: "14px" 
    },
    "& .profileTitle": {
      marginBottom: "15px",
    },
  },
  cardOne: {
    marginBottom: '30px',
    marginTop: '30px'
  },
    availabilityBadge: {
    padding: "30px 30px",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px", paddingRight: "14px" 
    },
    "& .availabilityBadgeTitle": {
      //   marginBottom: "15px",
    },
  },
  editSec: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  normalText: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "15px",
    innerWidth: 300
  },

}))

export { useStyles };
