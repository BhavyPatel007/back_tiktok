import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "40px 40px 0",
  },

  cardStyle: {
    padding: "0px 0px",
    paddingBottom: "30px",
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
      display: "flex",
      flexWrap: "wrap",
    },
  },

  topSearchBar: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",

    "& .searchBtn": {
      color: "#fff",
      backgroundColor: "#000",
      width: "50px",
      height: "44px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "0px 10px 10px 0px",
      cursor: "pointer",
    },
    "& input": {
      padding: "0.8px 15px",
      width: "100%",
      height: "40px",
      borderRadius: "10px 0px 0px 10px",
      boxShadow: "0px 0px 3px 0px",
      border: "none",
    },
  },

  recentSearches: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "30px",
    fontSize: "16px",

    "& .label": {
      color: "#000",
    },
    "& .valueBlue": {
      color: "blue",
    },
  },

  "@media(max-width: 768px)": {
    topSearchBar: {
      display: "none",
     
    },
    recentSearches: {
      display: "none",
    },
  },
});

export { useStyles };
