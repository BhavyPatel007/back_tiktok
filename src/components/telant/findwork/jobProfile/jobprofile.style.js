import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  root: {
    // padding: "40px 40px",
    "& .mb-15": {
      marginBottom: "15px",
    },
  },

  topSec: {
    padding: "30px 30px",
    textAlign: "center",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px", paddingRight: "14px" 
    },
    "& .profileTitle": {
      marginBottom: "15px",
    },
  },

  secondSec: {
    backgroundColor: "#2c63ff26",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px", paddingRight: "14px" 
    },

    "& .profileTitle": {
      marginBottom: "15px",
    },
    "& .first": {
      padding: "24px 30px",
      [theme.breakpoints.down('sm')]:{
        paddingLeft: "1px", paddingRight: "1px" 
      },
    },
    "& .second": {
      padding: "24px 30px",
      [theme.breakpoints.down('sm')]:{
        paddingLeft: "1px", paddingRight: "1px" 
      },
      "& .card": {
        background: "white",
        padding: "10px 15px",
        boxShadow: "1px 1px 3px 0px grey",
        borderRadius: "2px",
      },
      "& .MuiButton-label": {
        color: "blue",
      },
      "& .MuiButton-text": {
        padding: "6px 0px",
      },
    },
  },

  availableConnects: {
    padding: "30px 30px",
    textAlign: "center",
    "& .availableTitle": {
      // marginBottom: "15px",
      color: "blue",
    },
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

  MyCategories: {
    padding: "30px 30px",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px", paddingRight: "14px" 
    },
    "& .MyCategoriesTitle": {
      //   marginBottom: "15px",
    },
  },

  circleLogo: {
    "& img": {
      width: "60px",
      height: "60px",
      marginBottom: "10",
    },
  },

  availableRound: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "15px",
    "& .round": {
      gap: "3px",
      display: "flex",
      alignItems: "center",
      border: "1px solid gray",
      padding: "1px 10px",
      borderRadius: "20px",
      color: "gray",
    },
  },

  normalText: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "15px",
  },

  blueText: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "15px",
    color: 'blue'
  },

  cardOne: {
    marginBottom: '30px'
  },
  cardTow: {
    marginBottom: '30px'
  },

  proposals: {
    padding: "30px 30px",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px", paddingRight: "14px" 
    },
  }
}))

export { useStyles };
