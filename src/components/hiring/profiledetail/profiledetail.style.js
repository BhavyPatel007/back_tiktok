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
    [theme.breakpoints.down('sm')]:{
      paddingTop: "0px",
      paddingLeft: "14px",
    }
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
    width: "40%",
    borderRight: "1px solid #8080805e",
  },
  DetailRoot: {
    width: "60%",
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
    "&>h4": {
      marginBottom: "10px",
    },
  },
  countingData: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "28px",
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "19px",
    paddingRight: "28px",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px",
      paddingRight:14
    },
    "&>div h3": {
      fontWeight: 900,
      marginBottom: 5,
    },
    "&>div span": {
      fontSize: 14,
    },
  },
  EducationRoot: {
    paddingTop: "40px",
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingBottom: "19px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px",
      paddingRight:14
    },
    rowGap: "23px",
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
        fontSize: "14px", marginBottom: "10px"
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
    rowGap: 12,
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px",
      paddingRight:14
    },
    "&>div ul":{
      [theme.breakpoints.down('sm')]:{
        marginLeft: "22px",
       
      },
      
    },
    "&>div .skill":{
      [theme.breakpoints.down('sm')]:{
        marginLeft: "22px",
        marginTop:18
       
      },
    }
  },
  WorkHistory: {
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px",
      paddingRight:14
    },
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
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px",
      paddingRight:14
    },
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
    paddingBottom: "55px",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px",
      paddingRight:14
    },
  },
  chipWrap: {
    display: "flex",
    flexFlow: "wrap",
    columnGap: "17px",
    rowGap: "10px",
    marginTop: "1rem",
    "&>.MuiChip-root": {
      backgroundColor: "#3C58A7 !important",
      color: "white",
    },
  },
  EMPhistory: {
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    paddingBottom: "45px",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px",
      paddingRight:14
    },
  },
  EmployHistoryList: {
    paddingTop: "5px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "40px",
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
  MobileStyleCard:{
    borderTop:'1px solid #8080805e',
    "&>div h3":{
      marginBottom:'1rem'
    }
  },
  SaveButton:{
    width: "100%",
    background: "#3C58A7",
    padding: "10px 8px",
    borderRadius: "29px",
    color:'white',
    "&:hover":{
      background: "#3C58A7",
    }
  },
  badgeroot:{
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    borderBottom: "1px solid #8080805e",
    paddingBottom: "45px",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px",
      paddingRight:14
    },
  },
  stackroot:{
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "19px",
    paddingBottom: "31px",
    fontSize:'11px'
  },
  tableroot:{
    width:'100%',
    display:'flex',
    paddingLeft: "28px",
    paddingRight: "10px",
    paddingTop: "19px",
    paddingBottom: "31px",
  },
  lefttable:{
    width:'50%',
  },
  righttable:{
    width:'50%'
  },
  ProfileRoot1:{
      width: "37.5%",
      borderRight: "1px solid #8080805e",
      paddingLeft: "28px",
      paddingRight: "10px",
      paddingTop: "19px",
      paddingBottom: "31px",
  },
  DetailRootleft:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:10,
    width:'65%',
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      alignItems:'start',
      rowGap:5
    }
  },
  RatedRoot:{
    display:'flex',
    float:'left',
    flexDirection:'end',
    columnGap:45,
    textAlign:'left',
    alignItems:'left',
    [theme.breakpoints.down('sm')]:{
      columnGap:40,
      alignItems:'start',

    }
  },
  eduroot:{
    fontSize:17
  },
  sliderContent: {
    display: "flex",
    alignItems: "center",
   

    "& button": {
      border: "0",
      //   color: "#777",
      fontSize: "24px",
      marginTop: 8,
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
        margin: "4px",
        whiteSpace: "nowrap",
        fontSize:11
      },
    },
   
  },
  TopRated:{
    fontSize:15,
    fontWeight:'bold',
    display:'flex',
    alignItems:'center',
    columnGap:5
 },
 Progress2:{
  fontSize: 15,
   alignContent:'left',
   textAlign:'left',
   alignItems:'left',
   flexDirection:'start',
   float:'left'
 },
 star:{
  marginLeft:'5px'
 }
}));
export { useStyles };
