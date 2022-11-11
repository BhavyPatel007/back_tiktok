import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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
  round:{
    gap: "3px",
    display: "flex",
    alignItems: "center",
    border: "1px solid gray",
    padding: "1px 10px",
    borderRadius: "20px",
    color: "gray",
    backgroundColor: 'blue',
    width: '25%',
    
    color: 'white',
    fontWeight:'lighter'
  },
  ChipRoot:{
    background:'#3C58A7 !important',
    color:'white !important',
    [theme.breakpoints.down('sm')]:{
      width:'100%',
      marginTop:'1rem',
      marginBottom:'1rem'
    }
  },
  seeMore:{
    color:'#0000ffa6',
    marginTop:'5px',
    fontSize:15,
    "&:hover":{
       cursor:'pointer'
    }
  },
avatar: {
    width: 22,
    height: 22,
    
},
chipRootMain:{
 display:'flex',
 alignItems:'center',
 columnGap:10,
 
},


  topSearchBar: {
    display: "flex",
    alignItems: "center",
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
    marginTop: "5px", marginBottom: "30px",

    "& .label": {
      color: '#000',  
    },
    "& .valueBlue": {
      color: 'blue'
    },
  },
  availabilityBadge: {
    padding: "30px 30px",

    "& .availabilityBadgeTitle": {
      //   marginBottom: "15px",
    },
  },


  "@media(max-width: 768px)": {
    topSearchBar: {
      
    },
    recentSearches: {
        display: "none",
      },
  },

  avatarRoot:{
    backgournd:'#3C58A7 !important',
    height: "50px", width: "50px"
  },
  badgeRoot:{
   "&>.MuiBadge-anchorOriginBottomRightRectangle":{
    right: "5px", bottom: "6px"
   },
  "&>.MuiBadge-badge":{
    height:12,
    width:12,
    minWidth:12,
    background:'green'
  }
  },
  badgeRoot2:{
    
   "&>.MuiBadge-badge":{
    
     background:'green'
   }
   },
   rootperson:{
    padding:30,
    borderBottom:'1px solid #8080805e',
    [theme.breakpoints.down('sm')]:{
      paddingTop:'13px',
      paddingBottom:'11px',
      paddingLeft:'11px',
      paddingRight:'20px'
    }
   },
  PersonDesRoot:{
    padding:30,
    borderBottom:'1px solid #8080805e',
    [theme.breakpoints.down('sm')]:{
      paddingTop:'13px',
      paddingBottom:'11px',
      paddingLeft:15,
      paddingRight:15
    }
  },
  MainRoot:{
    display:'flex',
    alignItems:'center',
    columnGap:10
  },
  RatedRoot:{
    display:'flex',
    alignItems:'center',
    columnGap:20,
    [theme.breakpoints.down('sm')]:{
      columnGap:40
    }
  },
  contentRoot:{
     display:'flex',
     alignItems:'center',
     flexDirection:'column',
     alignItems:'start'
  },
  textHead:{
    color:'#3C58A7',
    fontSize:11.5,
    "&:hover":{
      cursor:'pointer'
    }
  },
  TextData:{
    fontSize:11.5
  },
  TextData2:{
    fontSize:11
  },
  HeadeRoot:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
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
  FavRoot:{
    display:'flex',
    alignItems:'center',
    columnGap:10
  },
  chip2:{
    border: "1px solid rgb(60 88 167)",
  backgroundColor: "transparent",
  color: "#3c58a7",
  fontWeight: "bold",
  fontSize: "13px",
  alignItems: "center",
  marginTop:11,
  height:24,
  "&>.MuiChip-label":{
    paddingLeft: "5px", paddingRight: "9px"
  }
  },
  TopRated:{
     fontSize:12,
     fontWeight:'bold',
     display:'flex',
     alignItems:'center',
     columnGap:5
  },
  Progress:{
    fontSize:11,
  },
  DetailRootData:{
    fontSize:13,
    marginTop:'1rem'
  },
  sliderContent: {
    display: "flex",
    alignItems: "center",
   

    "& button": {
      border: "0",
      //   color: "#777",
      fontSize: "24px",
      margin: "0px",
      background: "transparent",
      cursor: 'pointer',
      display: "flex",
      alignItems: "center",
    },

    "& .sliderParent": {
      display: "flex",
      alignItems: "center",
      listStyle: "none",
      maxWidth: "100%",
      overflowX: "scroll",
      paddingLeft:0,
      marginTop:8,
      scrollBehavior: "smooth",
      "&::-webkit-scrollbar": {
        background: "transparent",
        WebkitAppearance: "none",
        width: "0",
        height: "0",
      },

      "& li": {
        background: "#3C58A7",
        color: "#fff",
        padding: "4px 15px",
        borderRadius: "20px",
        margin: "0 4px",
        whiteSpace: "nowrap",
        fontSize:11
      },
    },
   
  },
  SliderSpan:{
    fontSize:13,
    fontWeight:'bold'
  },
  DrawerRoot:{
     "& .MuiDrawer-paper":{
      width:"70%"
     }
  },
  drawerHeadrer:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:17,
    borderBottom:'1px solid #8080805e',
    background:'#3C58A7',
    color:'white',
    "&>span":{
      fontSize: "17px", fontWeight: 700
    }
  }
}));


export { useStyles };
