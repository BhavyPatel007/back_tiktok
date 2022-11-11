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
  cardOne1: {
    marginBottom: '30px',
    marginTop: '30px',
    left: 0,
    
  },
  DetailRoot:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:10,
    width:'95%',
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      alignItems:'start',
      rowGap:5
    }
  },
  RatedRoot:{
    display:'flex',
    alignItems:'center',
    columnGap:20,
    [theme.breakpoints.down('sm')]:{
      columnGap:40
    }
  },
  TopRated:{
    fontSize:12,
    fontWeight:'bold',
    display:'flex',
    alignItems:'center',
    columnGap:5
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
    width: '700px'
  },
middle:{
    display: 'flex',
    marginTop: 25,
    [theme.breakpoints.down('sm')]:{
      columnGap:5
    }
},
middlemain:{
    // fontSize: "24px",
    // fontWeight: "700",
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    alignItems:'start',
    padding: '10px 10px'
    },
    middle1:{
          fontSize: "24px",
    fontWeight: "700", 
    },
    middle2:{
        marginTop: 10
    },
    lastmain:{
        // fontSize: "24px",
        // fontWeight: "700",
        display:'flex',
        padding: '10px 10px'
        },
        mainimage:{
          alignItems:'center',
          justifyContent: 'center',
          textAlign: 'center',
          paddingBottom: 70
        },
        image:{
          height: 120,
          marginBottom: 50,
        },
        lastpara:{
          color: '#3C58A7',
          display: 'grid',
          marginTop: 7,
        },
        roundedicon:{
          display: 'flex',
          gap: 8,
          padding: '2px 5px',
          [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            rowGap:2
          }
        },
        availableRound1:{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          marginBottom: "15px",
         
          "& .round": {
            gap: "3px",
            fontSize: '14px',
            display: "flex",
            alignItems: "center",
            border: "1px solid gray",
            padding: "2px 15px",
            borderRadius: "20px",
            height: 30,
            color: "black",
            backgroundColor: '#F1F1F1'
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
        RatedRooted: {
          display:'flex',
          alignItems:'center',
          textAlign: 'center',
          justifyContent: 'center',
          columnGap:30,
          [theme.breakpoints.down('sm')]:{
            columnGap:40
          }
        },
}))

export { useStyles };
