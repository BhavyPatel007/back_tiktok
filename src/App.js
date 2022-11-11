import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import HiringHomePage from "./pages/hiring";
import TelentHomePage from "./pages/telent";
import { ScaleLoader } from "react-spinners";
import { ScrollToTop } from "react-simple-scroll-up";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Profile from "./components/profile/Profile";
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <ScaleLoader height={60} color="#3C58A7" />
        </div>
      ) : (
        <Router>
             <Provider store={store}>
          <Routes>
            {/* Routes from telent */}
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard/telent" element={<TelentHomePage />} />
            <Route
              path="/dashboard/telent/findwork"
              element={<TelentHomePage />}
            />
            <Route
              path="/dashboard/telent/findwork/job-description/:id"
              element={<TelentHomePage />}
            />
            {/* Routes for hiring */}
            <Route path="/dashboard/hire" element={<HiringHomePage />} />
            <Route
              path="/dashboard/hire/discover/"
              element={<HiringHomePage />}
            />
            <Route
              path="/dashboard/hire/discover/profile-description/:id"
              element={<HiringHomePage />}
            />
             <Route
              path="/dashboard/profile"
              element={<Profile />}
            />
          </Routes>
          </Provider>
        </Router>
      )}
       <ScrollToTop
        bgColor="#3C58A7"
        strokeFillColor="white"
        symbol={<ArrowUpwardIcon style={{ color: "white" }} />}
        symbolColor="white"
      />
    </>
  );

  // if (route == "default") {
  //   routes = (
  //     <Router>
  //       <Routes>
  //         <Route index element={<NavButtons setRoute={setRoute} />} />
  //       </Routes>
  //     </Router>
  //   );
  // } else if (route == "isTalent") {
  //   routes = (
  //     <Router>
  //       <HeaderTalent />
  //       <Routes>
  //         <Route index element={<HomeTalent />} />
  //         <Route path="/findWork" element={<FindWork />} />
  //         {/* <Route path="teams" element={<Teams />}>
  //               <Route path=":teamId" element={<Team />} />
  //               <Route path="new" element={<NewTeamForm />} />
  //               <Route index element={<LeagueStandings />} />
  //             </Route> */}
  //       </Routes>
  //     </Router>
  //   );
  // } else if (route == "isHiring") {
  //   routes = (
  //     <Router>
  //       <HeaderHiringOrg />
  //       <Routes>
  //         <Route index element={<HomeHiring />} />
  //         <Route path="/discover" element={<Discover />} />
  //       </Routes>
  //     </Router>
  //   );
  // }

  // console.log("route___",route)
  // return <main>{routes}</main>;
};

export default App;
