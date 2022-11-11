import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  paginationRoot:{
    display:'flex',justifyContent:'flex-end',
    [theme.breakpoints.down('xs')]:{
      justifyContent:'center',
      marginTop:'1rem'
    }
  },
  root: {
    padding: "40px 40px 0",

    
  },

  cardStyle: {
    padding: "30px 0px",
    

    "& header": {
      padding: "0 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      [theme.breakpoints.down('sm')]:{
        padding: "0 11px",
      },
      "& h1":{
        [theme.breakpoints.down('sm')]:{
          fontSize:25
        },
      }
    },

    "& .cardDescription": {
      padding: "15px 30px",
    },

    "& .MuiAppBar-root": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      boxShadow: "none",
      marginBottom: "0",
    },
    "& .MuiTab-wrapper": {
      color: "#000",
      textTransform: "capitalize",
    },

    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "transparent",
      color: "#000",
    },

    "& .Mui-selected": {
      borderBottom: "2px solid #3C58A7",
      "& .MuiTab-wrapper": {
        color: "#3C58A7",
        textTransform: "capitalize",
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "transperant !important",
      display: "none",
    },

    "& .MuiTabs-flexContainer": {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },

  topSearchBar: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    "& .ais-SearchBox":{
      width:'100% !important'
    },
    "& .ais-SearchBox-form":{
     display:'flex',
     alignItems:'center'
    },
    "& .ais-SearchBox-submitIcon":{
      fill:'white',
      width:22,
      height:15
    },
     "& .ais-SearchBox-reset":{
      display:'none'
     },
    "& .ais-SearchBox-submit": {
      color: "#fff",
      backgroundColor: "#3C58A7",
      width: "50px",
      height: "44px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "0px 10px 10px 0px",
      cursor: 'pointer',
      border:'none'
    },

    // "& .searchBtn": {
    //   color: "#fff",
    //   backgroundColor: "#3C58A7",
    //   width: "50px",
    //   height: "44px",
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   borderRadius: "0px 10px 10px 0px",
    //   cursor: 'pointer',
    // },
    "& input": {
      padding: '0.8px 15px',
      width: "100%",
      height: "40px",
      borderRadius: "10px 0px 0px 10px",
      boxShadow: '0px 0px 3px 0px',
      border: 'none',
    },
  },

  recentSearches: {
    display: "flex",
    alignItems: "center",
    gap: '15px',
    marginBottom: "30px",
    fontSize: '16px',

    "& .label": {
      color: '#000',  
    },
    "& .valueBlue": {
      color: 'blue'
    },
  },

  "@media(max-width: 768px)": {
    topSearchBar: {
      display: "none",
    },
    recentSearches: {
      display: "none",
    },
  }
}))

export { useStyles };
