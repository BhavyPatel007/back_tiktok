import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  TabContent: {
    padding: "30px 30px",
    [theme.breakpoints.down('sm')]:{
      paddingLeft: "14px", paddingRight: "14px"
    },
    "& .heading": {
      fontSize: "22px",
      [theme.breakpoints.down('sm')]:{
        fontSize: "19px",
      },
      color: "#000",
      "&:hover":{
        cursor:'pointer'
      }
    },
    "& .headerTabContent": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      padding: "0 0",

      "& .likeDislike": {
        display: "flex",
        gap: "15px",

        "& .MuiSvgIcon-root": {
          width: "20px",
          height: "20px",
          padding: "2px",
        },
      },
    },
  },

  body: {
    "& .MuiSvgIcon-root": {
      fill: "#000",
    },

    "& .firstText": {
      fontSize: "13px",
      color: "#727272",
      marginBottom: "10px",
    },
    "& .secondText": {
      fontSize: "16px",
      color: "#000",
      marginBottom: "10px",
    },
    "& .proposais": {
      fontSize: "14px",
      color: "#000",
      fontWeight: "500",
      marginBottom: "15px",
    },
    "& .payment": {
      display: "flex",
      gap: "10px",
      alignItems: "center",

      "& .varifyLogo": {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        "& .MuiSvgIcon-root": {
          fill: "blue",
        },
      },
      "& .rating": {
        display: "flex",
        gap: "0px",
        alignItems: "center",
        "& .MuiSvgIcon-root": {
          fill: "green",
        },
      },
      "& .cuntry": {
        display: "flex",
        gap: "2px",
        alignItems: "center",
        "& .MuiSvgIcon-root": {
          fill: "gray",
        },
      },
    },

    "@media(max-width: 768px)": {
      "& .payment": {
        flexWrap: 'wrap',
      }
    }
  },

  sliderContent: {
    display: "flex",
    alignItems: "center",
    marginBottom: '20px',

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
      scrollBehavior: "smooth",
      "&::-webkit-scrollbar": {
        background: "transparent",
        WebkitAppearance: "none",
        width: "0",
        height: "0",
      },

      "& li": {
        color: "#fff",
        margin: "0 4px",
        padding: "4px 15px",
        fontSize: "11px",
        background: "#3C58A7",
        whiteSpace: "nowrap",
        borderRadius: "20px"
      },
    },
  },
 
}))

export { useStyles };
