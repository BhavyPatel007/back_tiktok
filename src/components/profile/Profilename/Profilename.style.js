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
  circleLogo: {
    "& img": {
      width: "60px",
      height: "60px",
      marginBottom: "10",
    },
  },
  contentRoot:{
    flexDirection:'column',
    alignItems:'start'
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
 chip2:{
  border: "1px solid rgb(60 88 167)",
backgroundColor: "transparent",
fontWeight: "bold",
fontSize: "13px",
alignItems: "center",
marginTop:11,
height:30,
"&>.MuiChip-label":{
  paddingLeft: "5px", paddingRight: "9px"
}
},
editSec: {
  display: "flex",
  gap: "20px",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "18px",
  
},
availableRound1:{
  display: "flex",
  gap: "12px",
  alignItems: "center",
  marginBottom: "15px",
  "& .round": {
    gap: "3px",
    display: "flex",
    alignItems: "center",
    border: "1px solid gray",
    padding: "2px 15px",
    borderRadius: "20px",
    height: 30,
    color: "gray",
  },
},
availableRound2:{
  display: "flex",
  gap: "12px",
  alignItems: "center",
  marginBottom: "15px",
  "& .round": {
    gap: "3px",
    display: "flex",
    alignItems: "center",
    border: "1px solid gray",
    padding: "2px 15px",
    borderRadius: "20px",
    height: 30,
    backgroundColor: 'black',
    color: "white",
  },
}

}))

export { useStyles };
