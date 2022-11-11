import React from "react";
import { useLocation,useParams } from "react-router-dom";
import MyFooter from "../../comman/Fotter/Fotter";
import FindWork from "../../components/telant/findwork/FindWork";
import JobDescription from "../../components/telant/findwork/jobdetail";
import HeaderTalent from "../../components/telant/header/HeaderTalent";
const TelentHomePage = () => {
  const location = useLocation();
  const parms = useParams();
  const renderScreen = (location) => {
    console.log('paramstelent',parms.id);

    switch (location) {
      case "/dashboard/telent/findwork":
        return <FindWork />;
      case `/dashboard/telent/findwork/job-description/${parms.id}`:
        return <JobDescription id={parms.id}/>
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
      <HeaderTalent />
      {renderScreen(location.pathname.toString())}
      <MyFooter />
    </>
  );
};
export default TelentHomePage;
