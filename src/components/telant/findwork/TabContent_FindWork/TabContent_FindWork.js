import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./TabContent_FindWork.style";
import Grid from "@material-ui/core/Grid";
import LogoCircle from "../../../../comman/uiElement/LogoCircle";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { postTelent } from "../../../../redux/telent/JobPost";

import { Box } from "@material-ui/core";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import gsap from "gsap";
import Tag from "../../../../comman/Tag";
import { useNavigate } from "react-router-dom";
import MyPagination from "../../../../comman/Pagination";
import Devider from "../../../../comman/uiElement/Devider";
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-dom";

const searchClient = instantMeiliSearch(
  "http://18.142.119.109:7700/",
  "ea10f4f06ef9ce49441fdff44b6181af8630fe355b99ff68f3a5d01e43a80dda"
);

const TabContent_FindWork = ({
  data,
  discription,
  Proposal,
  paymentVerified,
  location,
  title,
  seeMoreClick,id
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  //Anim
  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const [jobpost, setJobpost] = useState([]);

  // const Hit = ({ hit }) => {
  //   console.log('hitjobpost',hit);
  //   console.log('iddd',hit.Jobpost_ID);
  //   if (hit.Entity === "JOBPOST" ) {
  //     return (
  //       <>
  //         <div className="hit-name" style={{ display: "none" }}>
  //           <Highlight attribute="Fname" hit={hit} />
  //         </div>
  //         <TabContent_FindWork
  //            seeMoreClick={() =>
  //            { navigate(`/dashboard/telent/findwork/job-description/${hit.Jobpost_ID}`)
  //           console.log('clickjob',hit.Jobpost_ID);
  //           }
  //           }
  //           type={hit.Project_Type ? hit.Project_Type : "none"}
  //           data={hit.Skill_Set ? hit.Skill_Set : ["none"]}
  //           discription={hit.Description ?  <Highlight attribute="Description" hit={hit} /> : "none"}
  //           Proposal={
  //             hit?.Proposal_Questions?.length > 0
  //               ? hit?.Proposal_Questions?.length
  //               : 0
  //           }
  //           paymentVerified={
  //             hit?.Payment_Method_Verified
  //               ? hit?.Payment_Method_Verified
  //               : false
  //           }
  //           location={hit?.Location ? <Highlight attribute="Location" hit={hit} /> : "none"}
            
  //           title={hit.Jobpost_Title ?  <Highlight attribute="Description" hit={hit} /> : "none"}

  //         />
  //       </>
  //     );
  //   } 
  // };

  // const handlesubmit= (() =>{
  //   const request = {

  //     onSuccess: (res) => {
  //       console.log('Data', res);
  //       setJobpost(res)
  //       console.log('logggg',res.JobPost);
  //     },
  //     onFail: (error) => {
  //       console.log('Dataerror', error);

  //     },
  //   };
  //   dispatch(postTelent(request));
  // })

  // const handlesubmit = () => {
    // alert('done')
    //  const data = {
    //     Action : "getJobPostForTalent",
    //     JobpostID : "JOBPOST-20220608-11",
    //   };

  //   fetch(
  //     "https://10acb4dfc9.execute-api.ap-southeast-1.amazonaws.com/dev/getdata",
  //     {
  //       method: "POST",
  //       redirect: "follow",
  //       headers: {
  //         "cache-control": "no-cache",
  //         "postman-token": "f15506df-16a7-8145-1dbc-994d6acf5fd0",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         Action: "getJobPostForTalent",
  //         JobpostID: "JOBPOST-20220608-11",
  //       }),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setJobpost(res.JobPost);
  //       console.log(res.JobPost);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  
  
  return (
    <>
      <div className={`${classes.TabContent} ${classes.className}`}>
        <header className="headerTabContent">
          <h1
            className="heading"
            onClick={seeMoreClick}
            
          >
            {title}
          </h1>
          <div className="likeDislike">
            <LogoCircle>
              <ThumbDownOutlinedIcon />
            </LogoCircle>
            <LogoCircle>
              <FavoriteBorderIcon />
            </LogoCircle>
          </div>
        </header>
        <Box className={classes.body}>
          {/* {jobpost.map((row) =>{ */}
          <p className="firstText">
            {/* hii */}
            {/* {row.Project_Type} */}
          </p>
          {/* })} */}
          <p className="secondText">{discription}</p>

          <div className={classes.sliderContent}>
            {data.length > 10
              ? scrollX !== 0 && (
                  <button
                    className="prev"
                    onClick={() => slide(-50)}
                    // onMouseEnter={(e) => anim(e)}
                    // onMouseLeave={(e) => anim2(e)}
                  >
                    <ArrowBackIosSharpIcon />
                  </button>
                )
              : null}
            <ul className="sliderParent" ref={scrl} onScroll={scrollCheck}>
              {data.map((d, i) => (
                <Tag data={d} key={i} />
              ))}
            </ul>
            {data.length > 10
              ? !scrolEnd && (
                  <button
                    className="next"
                    onClick={() => slide(+50)}
                    // onMouseEnter={(e) => anim(e)}
                    // onMouseLeave={(e) => anim2(e)}
                  >
                    <ArrowForwardIosSharpIcon />
                  </button>
                )
              : null}
          </div>

          <h5 className="proposais">
            Proposal: <b>{Proposal}</b>
          </h5>
          <div className="payment">
            {paymentVerified ? (
              <>
                <div className="varifyLogo">
                  <VerifiedUserRoundedIcon />
                  <h5>Payment verified</h5>
                </div>
                <div className="rating">
                  <StarRateRoundedIcon />
                  <StarRateRoundedIcon />
                  <StarRateRoundedIcon />
                  <StarRateRoundedIcon />
                  <StarRateRoundedIcon />
                </div>
              </>
            ) : (
              <div className="varifyLogo">
                <VerifiedUserRoundedIcon
                  // onClick={handlesubmit}
                  style={{ fill: "red" }}
                />
                <h5>Payment not verified</h5>
              </div>
            )}

            <h5 className="spent">
              <b>$8k+</b> spent
            </h5>
            <div className="cuntry">
              <RoomRoundedIcon />
              <h5>{location}</h5>
            </div>
          </div>
        </Box>
      </div>
      <Devider />
    </>
  );
};

export default TabContent_FindWork;
