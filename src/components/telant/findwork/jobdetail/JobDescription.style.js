import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: "40px 40px",
  },
  "@media(max-width: 768px)": {
    root: {
      padding: "30px 15px",
    },
  },
  cardStyle: {
    width: "100%",
    padding: "0px 0px",
    boxShadow:
      "rgb(0 0 0 / 5%) 0px 0px 0px 1px, rgb(209 213 219) 0px 0px 0px 1px inset",
    borderRadius: "20px",
    backgroundColor: "#fff",
    "& header": {
      padding: "0 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
  },
  MainRoot: {
    height: "95px",
    display: "flex",
    columnGap: "10px",
    alignItems: "center",
    paddingLeft: "26px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "46px",
    paddingTop: "30px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0px",
    },
  },
  avatarRoot: {
    backgournd: "#3C58A7 !important",
    height: "70px",
    width: "70px",
  },
  badgeRoot: {
    "&>.MuiBadge-anchorOriginBottomRightRectangle": {
      right: "11px",
      bottom: "7px",
    },
    "&>.MuiBadge-badge": {
      height: 12,
      width: 12,
      minWidth: 12,
      background: "green",
    },
  },
  contentRoot: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    alignItems: "start",
  },
  textHead: {
    color: "black",
    fontSize: "21.5px",
    fontWeight: 700,
    marginTop: "33px",
  },
  TextData: {
    fontSize: 11.5,
  },
  TextData2: {
    fontSize: 14,
    marginTop: 5,
  },
  Progress: {
    fontSize: 14,
    marginTop: 14,
  },
  MainRootProfile: {
    display: "flex",
    width: "100%",
  },
  ProfileRoot: {
    width: "80%",
    borderRight: "1px solid #8080805e",
  },
  DetailRoot: {
    width: "20%",
  },
  ViewProfile: {
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
    paddingLeft: "28px",
    paddingTop: "19px",
    fontSize: "16px",
    fontWeight: 700,
    borderBottom: "1px solid #8080805e",
    paddingBottom: "19px",
  },
  PastHire: {
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "19px",
    paddingLeft: "28px",
    display: "flex",
    alignItems: "center",
    "&>h4": {
      width: 109,
    },
    [theme.breakpoints.down("sm")]:{
      justifyContent:'space-between',
      paddingRight:14,
      paddingLeft:14,
      "&>p":{
        fontSize:14
      }
    }
  },
  countingData: {
    display: "flex",
    columnGap: 200,
    paddingLeft: "28px",
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "19px",
    paddingRight: "28px",
    "&>div h3": {
      fontWeight: 700,
      marginBottom: 5,
    },
    "&>div span": {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      columnGap: 0,
      paddingRight: "14px",
      paddingLeft: "14px",
    },
    "&>.hedingDiv": {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        rowGap: 15,
      },
    },
  },
  About: {
    display: "flex",
    paddingLeft: "28px",
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "19px",
    paddingRight: "28px",
    flexDirection: "column",
    rowGap: "20px",
    [theme.breakpoints.down('sm')]:{
      rowGap: "10px",
      paddingLeft: "14px",
      paddingRight: "14px",
    },
    "&>div h3": {
      fontWeight: 700,
      marginBottom: 5,
      fontSize: 14,
      [theme.breakpoints.down('sm')]:{
        marginBottom: 0,
        fontSize: 12,
      },
    },
    "&>div span": {
      fontSize: 13,
      color: "grey",
    },
  },
  EducationRoot: {
    paddingTop: "19px",
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingBottom: "19px",
    borderBottom: "1px solid #8080805e",
    display: "flex",
    flexDirection: "column",
    rowGap: "23px",
    [theme.breakpoints.down('sm')]:{
      rowGap: "13px",
      paddingLeft: "14px",
    paddingRight: "14px",
      "&>div": {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        "&>b":{
          display: "flex", alignItems: "center", columnGap: "8px" ,fontSize:12
        },
        "&>span":{
          fontSize: '14px !important',
          
        }
      },
      
    },
    "&>div h4": {
      marginBottom: "0.5rem",
    },
    "&>div span": {
      fontSize: 16,
    },
    "&>div p": {
      fontSize: 13,
      marginBottom: "4px",
    },
  },
  ProfileTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "start",
    },
    "&>div": {
      display: "flex",
      alignItems: "center",
      columnGap: 10,
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        fontSize: "14px",
        marginBottom: "10px",
      },
    },
  },
  dataroot: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "45px",
    [theme.breakpoints.down('xs')]:{
      paddingLeft: "14px",
      paddingRight: "14px",
    },
    rowGap: 12,
    "&>.div-title": {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    "&>.tag-line": {
      marginTop: "1rem",
    },
    "&>.div-title .title": {
      color: "#3c58a7",
      fontWeight: 700,
      marginBottom: "7px",
    },
    "&>.div-title .time-line": {
      color: "#808080b0",
      fontSize: "13px",
    },
    "&>.location": {
      display: "flex",
      alignItems: "center",
      columnGap: "4px",
      fontSize: "13px",
      fontWeight: 700,
      "&>.MuiSvgIcon-root": {
        color: "#3c58a7",
        fontSize: "17px",
      },
    },
  },
  WorkHistory: {
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",

    "&>.logoWrap": {
      display: "flex",
      alignItems: "center",
      columnGap: 10,
    },
    "& header": {
      padding: "0 0px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
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
    rootTab: {
      padding: 30,
      paddingTop: 20,
    },

    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "transparent",
      color: "#000",
    },

    "& .Mui-selected": {
      borderBottom: "2px solid #2185D0",
      "& .MuiTab-wrapper": {
        color: "#2185D0",
        textTransform: "capitalize",
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "transperant !important",
      display: "none",
    },

    "& .MuiTabs-flexContainer": {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  workList: {
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "45px",
  },
  work: {
    paddingTop: "5px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "20px",
    "&>h3": {
      color: "#3C58A7",
    },
  },
  reviewData: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    marginTop: 6,
    "& .MuiSvgIcon-root": {
      color: "green !important",
      fontSize: "18px",
    },
  },
  HoursRoot: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  SkillRoot: {
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "45px",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px",
      paddingRight: "14px",
    },
    "&>.skill-data": {
      display: "flex",
      columnGap: "200px",
      marginTop: "1rem",
      [theme.breakpoints.down('sm')]:{
          columnGap:10,
          rowGap:10,
          flexFlow:'wrap'
      },
      "&>div h5": {
        paddingBottom: 9,
      },
    },
  },
  chipWrap: {
    display: "flex",
    flexFlow: "wrap",
    columnGap: "17px",
    rowGap: "10px",
    // overflowX: 'scroll',
    // width: '50%',
    marginTop: "1rem",
    "&>.MuiChip-root": {
      backgroundColor: "#3C58A7 !important",
      color: "white",
    },
  },
  sliderContent: {
    display: "flex",
    alignItems: "center",
   

    "& button": {
      border: "0",
      //   color: "#777",
      fontSize: "24px",
      marginTop: 7,
      background: "white",
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
  EMPhistory: {
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    paddingBottom: "45px",
    borderBottom: "1px solid #8080805e",
    [theme.breakpoints.down('sm')]:{
      paddingBottom: "6px",
      paddingLeft: "14px",
    paddingRight: "14px",
    }
    
  },
  ViewMore: {
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    paddingBottom: "19px",
    [theme.breakpoints.down('sm')]:{
      borderBottom: "1px solid #8080805e",
      paddingLeft: "14px",
    paddingRight: "14px",
    }
  },
  iconRoot:{
    backgroundColor: "#3C58A7 !important",
    color:'white',
    padding:5,
    "&:hover":{
      backgroundColor: "#3C58A7 !important",
    }
  },
  EmployHistoryList: {
    paddingTop: "20px",
    "&>.MuiPaper-root":{
      boxShadow: "none",
      borderBottom: "0.5PX SOLID #80808047",
      borderRadius: "5PX"
    },
    [theme.breakpoints.down('sm')]:{
      paddingTop: "0px",
      "&>.MuiAccordion-root":{
        boxShadow:'none !important',
        "&>.MuiButtonBase-root":{
          padding:0
        }
      },
      "& .MuiAccordionDetails-root":{
        padding:0,
        paddingBottom:'0.8rem'
      }
    }
  },
  Active: {
    background: "#3C58A7",
    paddingTop: "0.8rem",
    color: "white",
    paddingBottom: "0.8rem",
    paddingLeft: "1rem",
    borderRadius: "20px 1px 1px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "1rem",
    "&:hover": {
      background: "#3C58A7",
      color: "white",
      cursor: "pointer",
    },
  },
  Active_not: {
    background: "white",
    paddingTop: "0.8rem",
    paddingBottom: "0.8rem",
    paddingLeft: "1rem",
    borderRadius: "20px 1px 1px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "1rem",
    "&:hover": {
      background: "#3C58A7",
      color: "white",
      cursor: "pointer",
    },
  },
  MobileStyleCard: {
    borderTop: "1px solid #8080805e",
    "&>div h3": {
      marginBottom: "1rem",
    },
  },
  SaveButton: {
    width: "100%",
    background: "#3C58A7",
    padding: "10px 8px",
    borderRadius: "29px",
    textTransform: "capitalize",
    borderColor: "#3C58A7",
    border: "1px solid",
    color: "white",
    "&:hover": {
      background: "#3C58A7",
    },
  },
  buttonWrap: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    [theme.breakpoints.down("sm")]:{
      flexDirection: "revert",
      alignItems: "center",
      columnGap: "10px",
      marginTop: "1rem",
      paddingLeft: "14px",
      paddingRight: "14px"
    }
  },
  SaveJobButton: {
    width: "100%",
    background: "white",
    padding: "10px 8px",
    borderRadius: "29px",
    textTransform: "capitalize",
    color: "#3C58A7",
    borderColor: "#3C58A7",
    border: "1px solid",
    "&:hover": {
      background: "white",
    },
  },
  flagRoot: {
    display: "flex",
    flexDirection: "column",
    rowGap: "7px",
  
    "&>.flag": {
      display: "flex",
      alignItems: "center",
      fontSize: "13px",
      fontWeight: 600,
      [theme.breakpoints.down('sm')]:{
        paddingTop: "12px",
        paddingLeft: "14px",
        borderBottom: "1px solid #8080805e",
        paddingRight: "14px",
        paddingBottom:12,
        columnGap:10
      }
      
    },
    "&>.data": {
      fontSize: "13px",
    },
  },
  textField: {
    "&>.MuiInputBase-root.Mui-disabled": {
      borderRadius: 17,
    },
  },
  textRoot: {
    display: "flex",
    flexDirection: "column",
    rowGap: "7px",
    "&>.copylink": {
      color: "#3C58A7 !important",
      fontWeight: 700,
    },
  },
  Detailhistory: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      alignItems:'start',
      rowGap:10
    },
    "&>.title-work": {
      "&>p": {
        fontSize: "16px",
        color: "#3c58a7",
        marginBottom: "5px",
        [theme.breakpoints.down('sm')]:{
          color: "black",
          fontWeight:600,
          fontSize: "14px",
        },
      },
      "&>span": {
        fontSize: "12px",
        color: "grey",
      },
    },
    "&>.time-work": {
      "&>p": {
        fontSize: "13px",
        fontWeight: 700,
        marginBottom: "4px",
        textAlign: "right",
        [theme.breakpoints.down('sm')]:{
          textAlign: "left",
        },
      },
    },
    "&>div .text-site": {
      fontSize: "14px",
    },
  },
  root2: {
    "&>span": {
      fontSize: "13px",
    },
  },
  Root3: {
    display: "flex",
    flexDirection: "column",
    rowGap: "7px",
    marginTop: "2rem",
    fontSize: "13px",
  },
}));
export { useStyles };
