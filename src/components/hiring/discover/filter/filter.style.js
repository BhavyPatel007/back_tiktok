import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({

  root: {
    width: '300px',
    boxShadow: "rgb(0 0 0 / 5%) 0px 0px 0px 1px, rgb(209 213 219) 0px 0px 0px 1px inset",
    borderRadius: "20px",
    backgroundColor: "#fff",
    // padding: "40px 40px",
    "& .mb-15": {
      marginBottom: "15px",
    },
  },
  cardOne:{
    background: "transparent",
    boxShadow: "none",
    [theme.breakpoints.down('sm')]:{
      "& .MuiAccordion-root.Mui-expanded":{
        margin:0
      },
      "& .MuiTypography-body1":{
        fontSize:13,
        fontWeight:500
      }
    }
  },
  accordion:{
    marginTop: '5%'
  },
  cardHeading:{
    fontSize: "21px !important", 
    marginLeft: "11px !important" 
  },
  titleDiv:{
    display: "flex", alignItems: "center", columnGap: 0
  },
  titleData:{
    display: "flex",
    alignItems: "center",
    columnGap: 7,
  },
  CategoryRoot:{
    display:'flex',
    flexDirection:'column',
    rowGap:10,
    fontSize: "15px", fontWeight: 500
  }
}));

export { useStyles };
