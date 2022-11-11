import React from "react";
import { useLocation, useParams } from "react-router-dom";
import MyFooter from "../../comman/Fotter/Fotter";
import Discover from "../../components/hiring/discover/Discover";
import HeaderHiringOrg from "../../components/hiring/header/HeaderHiringOrg";
import ProfileDescription from "../../components/hiring/profiledetail";
import HeaderTalent from "../../components/telant/header/HeaderTalent";
const HiringHomePage = () => {
  const location = useLocation();
  const parms = useParams();
  console.log(location)
  console.log(parms)
  const renderScreen = (location) => {
    console.log('params',parms.id);
    switch (location) {
      case "/dashboard/hire/discover":
        return <Discover />;
      case `/dashboard/hire/discover/profile-description/${parms.id}`:
        return <ProfileDescription id={parms.id}/>;
        
      default:
        
        return (
          <div style={{height:'52.8vh'}}>
            <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
              Home Hire
            </h1>
          </div>
        );
    }
  };
  return (
    <>
      <HeaderHiringOrg />
      {renderScreen(location.pathname.toString())}
      <MyFooter />
    </>
  );
};
export default HiringHomePage;
