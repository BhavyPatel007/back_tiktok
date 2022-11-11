import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header_style: {
    backgroundColor: "#3C58A7",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    height: "65px",
    padding: "0 40px",
  },

  socialIcons: {
    display: "flex",
    alignItems: "center",

    "& .MuiButton-text, .MuiSvgIcon-root": {
      color: "#fff",
      // color: "#3C58A7",
    },
  },

  headeMenu: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  searchArea: {
    display: "flex",
    alignItems: "center",
    gap: "18px",

    "& .MuiSvgIcon-root, .MuiBox-root, .MuiButton-text": {
      // color: '#fff',
      color: "#3C58A7",
    },
    "& .que": {
      color: "#fff",
      // color: "#3C58A7",
    },

    "& .searchBox": {
      backgroundColor: "#fff",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "4px 10px",
      "& input": {
        backgroundColor: "transparent",
        border: "none",
        borderRight: "1px solid #3C58A7",
        width: "300px",
        fontSize: "16px",
        color: "#3C58A7",

        "&::placeholder": {
          textOverflow: "ellipsis !important",
          color: "#c9c0c0",
        },
      },
    },
  },

  rightHeader: {
    marginLeft: "auto",
    display: "flex",
    gap: "30px",
    alignItems: "center",
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: 0,
    },
  },

  dropdownMenu: {
    "& .MuiButton-label": {
      textTransform: "capitalize",
    },

    "& .MuiButton-text, .MuiSvgIcon-root": {
      color: "#fff",
      // color: "#3C58A7",
    },
  },

  mobileMenu: {
    display: "none",
  },
  "@media(max-width: 1180px)":{
    header_style: {
      display: "none",
    },
    mobileMenu: {
      background: "#3C58A7",
      height: "52px",
      alignItems: "center",
      display: "flex",
    },
    logoWarap: {
      display: "flex",
      gap: "18rem",
    },
  },
  "@media(max-width: 780px)": {
    mobileMenu: {
      background: "#3C58A7",
      height: "52px",
      alignItems: "center",
      display: "flex",
    },
    mobileSearch:{
      "& .MuiOutlinedInput-adornedEnd":{
        paddingRight:0
      }
    },
    logoWarap: {
      display: "flex",
      gap: "65px",
    },
    header_style: {
      display: "none",
    },
  },

  sideDrawer_style: {
    padding: "20px 0",

    "& header": {
      display: "flex",
      alignItems: "center",
      gap: "30px",
    },
    "& .MuiAccordionDetails-root": {
      display: "block",
      padding: "0px 16px 16px",
    },

    "& .searchBox": {
      backgroundColor: "#898d896b",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "4px 10px",
      margin: "10px 10px",
      "& input": {
        backgroundColor: "transparent",
        border: "none",
        borderRight: "1px solid #3C58A7",
        // width: "300px",
        fontSize: "16px",
        color: "#fff",

        "&::placeholder": {
          textOverflow: "ellipsis !important",
          color: "#c9c0c0",
        },
      },
    },

    "& .MuiPaper-root": {
      backgroundColor: "#3C58A7",
    },
    "& .MuiTypography-root, .MuiIconButton-label, .MuiButton-label, .MuiSvgIcon-root":
      {
        // color: "#3C58A7",
        color: "#fff",
      },
  },

  navLink_accordion: {
    color: "#dbd6d6",
    display: "block",
    padding: "8px 0px",
    fontFamily: "Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
    borderBottom: "1px solid #ffffff57",
    textDecoration: "none",
    width: "100%",
    textAlign: "left",
    paddingLeft: "10px",
  },
});

export { useStyles };
